import { useSize } from "src/boot/size"
import { useUser } from "src/compositions/core/user.composition"
import { useLayout } from "src/compositions/layouts/layout.composition"
import { computed, defineComponent, onUnmounted, PropType, ref } from "vue"
import { fromEvent } from "rxjs"
import Search from "src/components/pages/home/Search/Search.vue"

export default defineComponent({
	components: {
		Search
	},
	props: {
		links: {
			type: Array as PropType<Menu[]>,
			required: true,
		}
	},
	setup(props) {

		const layout = useLayout()
		const user = useUser()
		const { size } = useSize()

		const searchMode = ref(false)
		const headerBgClass = ref("")

		const headerClass = computed(() => {
			return `${headerBgClass.value} ${layout.headerClass.value}`
		})

		const scrollSubscription = fromEvent(window, "scroll")
			.subscribe(() => handleScroll())

		function mouseOver(link: any) {
			if (link.menu == false)
				link.menu = true


			// for (const temp of props.links) {
			// 	if (temp.title != link.title) temp.menu = false
			// }

		}

		function mouseOut(link: any) {
			link.menu = false
		}

		function closeSearchMode() {
			searchMode.value = false
		}

		function handleScroll() {
			if (window.scrollY > 64) {
				headerBgClass.value = "background"
			}
			if (window.scrollY < 64) {
				headerBgClass.value = ""
			}
		}

		onUnmounted(() => {
			scrollSubscription.unsubscribe()
		})


		return {
			searchMode,
			headerClass,
			size,
			user,
			layout,
			closeSearchMode,
			mouseOver,
			mouseOut,
		}
	}
})


type Menu = {
	menu?: boolean;
	title?: string;
	disabled?: boolean;
	icon?: string;
	class?: string;
	typeLink?: boolean,
	to?: string,
	sidebar?: boolean
	data?: {
		link: string;
		image: string;
		disabled: boolean;
		title: string;
		class: string;
	}[]
}
