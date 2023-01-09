import { useSize } from "src/boot/size"
import CloudImage from "src/components/shared/CloudImage/CloudImage"
import HeaderPattern from "src/components/shared/HeaderPattern/HeaderPattern"
import HorizentalCard, { CardType } from "src/components/shared/HorizentalCard/HorizentalCard"
import Pagination, { PaginationInput } from "src/components/shared/Pagination/Pagination"
import Tags from "src/components/shared/TagContainer/TagContainer"
import { useEvent } from "src/compositions/pages/event.composition"
import { convertToText } from "src/utils/util"
import { defineComponent, Ref, ref, watch } from "vue"
import { useRouter } from "vue-router"

export type EventCategoryType = {
	image: string;
	title: string;
	id: string;
	link: string;
}

export type EventTabInput = {
	cards: CardType[];
	paginationInput: PaginationInput;
	skeleton: boolean;
	categories: EventCategoryType[];
}

export default defineComponent({
	name: "EventTabContainer",
	components: {
		Tags,
		HeaderPattern,
		HorizentalCard,
		Pagination,
		CloudImage
	},
	props: {
		cards: {
			type: Array as () => CardType[],
			required: true
		},
		paginationInput: {
			type: Object as () => PaginationInput,
			required: true
		},
		categories: {
			type: Array as () => EventCategoryType[],
			required: true
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	emits: ["filter"],
	setup(props, { emit }) {
		const {size} = useSize()
		const routerInstance = useRouter()
		const activeItem: Ref<string> = ref(routerInstance.currentRoute.value.query["tab"] as string)
		const event = useEvent()
		const filter: Ref<any> = ref({
			text: "",
			tab: "newest"
		})

		function changeFilterOrder(filterTab) {
			event.currentFilter.value = filterTab == "newest" ? "ID" : "READ_VALUE"
			emit("filter")
		}

		function changeContent(item: EventCategoryType) {
			const tab = routerInstance.currentRoute.value.query["tab"] as string
			if (convertToText(tab) != item.title) {
				activeItem.value = item.title
			}
		}

		function search(setCurrent = true) {
			if (setCurrent)
				props.paginationInput.currentPage = 1
			event.currentText = filter.value.text
			emit("filter")
		}

		watch(() => routerInstance.currentRoute.value.query["tab"], () => {
			const tab = routerInstance.currentRoute.value.query["tab"] as string
			activeItem.value = convertToText(tab)
		})

		return {
			props,
			filter,
			activeItem,
			size,
			changeContent,
			changeFilterOrder,
			search
		}
	}
})
