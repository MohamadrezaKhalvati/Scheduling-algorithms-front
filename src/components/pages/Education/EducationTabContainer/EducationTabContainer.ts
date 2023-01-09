import { useSize } from "src/boot/size"
import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import HeaderPattern from "src/components/shared/HeaderPattern/HeaderPattern.vue"
import EducationCard from "src/components/shared/HorizentalCard/HorizentalCard.vue"
import { CardType } from "src/components/shared/HorizentalCard/HorizentalCard"
import Pagination from "src/components/shared/Pagination/Pagination.vue"
import { PaginationInput } from "src/components/shared/Pagination/Pagination"
import Tags from "src/components/shared/TagContainer/TagContainer.vue"
import { TagType } from "src/components/shared/TagContainer/TagContainer"
import { useEducation } from "src/compositions/pages/education.composition"
import { convertToText } from "src/utils/util"
import { defineComponent, Ref, ref, watch } from "vue"
import { useRouter } from "vue-router"

export type EducationCategoryType = {
	image: string;
	title: string;
	id: string;
	link: string;
}

export type EducationTabInput = {
	tags: TagType[];
	cards: CardType[];
	paginationInput: PaginationInput;
	skeleton: boolean;
	categories: EducationCategoryType[];
}

export default defineComponent({
	components: {
		Tags,
		HeaderPattern,
		EducationCard,
		Pagination,
		CloudImage
	},
	props: {
		tags: {
			type: Array as () => TagType[],
			default: () => []
		},
		cards: {
			type: Array as () => CardType[],
			default: () => []
		},
		paginationInput: {
			type: Object as () => PaginationInput,
			default: () => ({})
		},
		categories: {
			type: Array as () => EducationCategoryType[],
			default: () => []
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	emits: ["filter"],
	setup(props, { emit }) {
		const { size } = useSize()
		const routerInstance = useRouter()
		const education = useEducation()
		const activeItem: Ref<string> = ref(routerInstance.currentRoute.value.query["tab"] as string)
		const filter: Ref<any> = ref({
			text: "",
			tab: "newest"
		})

		function changeFilterOrder(filterTab) {
			education.currentFilter.value = filterTab == "newest" ? "id" : "readValue"
			emit("filter")
		}

		function changeContent(item: EducationCategoryType) {
			const tab = routerInstance.currentRoute.value.query["tab"] as string
			if (tab && convertToText(tab) != item.title) {
				activeItem.value = item.title
			}
		}

		function search(setCurrent = true) {
			if (setCurrent)
				// eslint-disable-next-line vue/no-mutating-props
				props.paginationInput.currentPage = 1
			education.currentText = filter.value.text
			emit("filter")
		}

		watch(() => routerInstance.currentRoute.value.query["tab"], () => {
			const tab = routerInstance.currentRoute.value.query["tab"] as string
			activeItem.value = convertToText(tab)
		})

		function filterOnTag(value) {
			education.tag = value
			emit("filter")
		}

		return {
			props,
			education,
			filter,
			activeItem,
			size,
			changeContent,
			changeFilterOrder,
			search,
			filterOnTag
		}
	}
})
