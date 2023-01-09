import { version } from "package.json"
import { useSize } from "src/boot/size"
import { useLayout } from "src/compositions/layouts/layout.composition"
import { Menu } from "src/layouts/Base/Base"
import { computed, defineComponent, PropType, ref, watch } from "vue"
import { useRouter } from "vue-router"

type NavigationLinkType = {
	label: string;
	icon: string;
	link: string;
}

export default defineComponent({
	props: {
		links: {
			type: Array as PropType<Menu[]>,
			required: true,
		}
	},
	setup() {
		const miniModeThresholdInPx = 1200
		const layout = useLayout()
		const { size } = useSize()
		const router = useRouter()
		const navigationLinks = ref<NavigationLinkType[]>([])
		const appVersion = ref(version)
		const miniState = ref(true)

		const computedIconClass = computed(() => {
			return {
				"rotate-icon": !miniState.value,
				"center-icon": miniState.value,
				"hide-icon": size.value.width < miniModeThresholdInPx,
			}
		})

		const computedDrawer = computed(() => {
			return { marginDrawer: size.value.width < miniModeThresholdInPx }
		})

		function toggleDrawer() {
			miniState.value = !miniState.value
		}

		function setLinks() {
			navigationLinks.value = [
				{
					label: "خانه",
					icon: "dashboard",
					link: "/"
				},
			]
		}

		watch(() => size.value.width, () => {
			if (size.value.width < miniModeThresholdInPx) {
				miniState.value = false
			}
		}, { immediate: true })

		setLinks()

		return {
			layout,
			router,
			appVersion,
			miniState,
			computedIconClass,
			computedDrawer,
			navigationLinks,
			miniModeThresholdInPx,
			toggleDrawer,
		}
	}
})
