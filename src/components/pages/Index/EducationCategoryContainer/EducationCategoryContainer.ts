import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import HorizentalArticleCard from "src/components/shared/HorizentalArticleCard/HorizentalArticleCard.vue"
import { ArticleType } from "src/components/shared/HorizentalArticleCard/HorizentalArticleCard"
import SlotTransitionWrapper from "src/components/shared/SlotTransitionWrapper/SlotTransitionWrapper.vue"
import Title from "src/components/shared/Title/Title.vue"
import { convertToURL } from "src/utils/util"
import { computed, defineComponent, ref, Ref } from "vue"

export type EducationCategoryInput = {
	categories: CategoryType[];
	articles: ArticleType[];
	skeleton: boolean;
}

export type CategoryType = {
	title: string;
	id: string;
}

export default defineComponent({
	components: {
		HorizentalArticleCard,
		Title,
		CloudImage,
		SlotTransitionWrapper
	},
	props: {
		categories: {
			type: Array as () => CategoryType[],
			required: true
		},
		articles: {
			type: Array as () => ArticleType[],
			required: true
		},
		skeleton: {
			type: Boolean,
			default: true
		}
	},
	emits: ["filter"],
	setup(props, { emit }) {
		const categoryId: Ref<number> = ref(0)
		const categoryTitle: Ref<string> = ref(props.categories[0].title)

		const animation = {
			enterAnimation: "fadeIn",
			leaveAnimation: "fadeOut",
			transitionShow: "fade",
			transitionleave: "fade"
		}

		function changeCategory(data, index) {
			categoryId.value = index
			categoryTitle.value = data.title
			emit("filter", data.id)
		}

		const educationLink = computed(() => {
			return `/education?tab=${convertToURL(categoryTitle.value)}`
		})

		return {
			categoryId,
			categoryTitle,
			animation,
			changeCategory,
			convertToURL,
			educationLink,
			props
		}
	}
})
