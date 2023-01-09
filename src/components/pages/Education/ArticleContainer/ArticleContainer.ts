import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import { ArticleType } from "src/components/shared/HorizentalArticleCard/HorizentalArticleCard"
import HorizentalArticleCard from "src/components/shared/HorizentalArticleCard/HorizentalArticleCard.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export default defineComponent({
	components: {
		HorizentalArticleCard,
		Title,
		CloudImage
	},
	props: {
		articles: {
			type: Array as () => ArticleType[],
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		skeleton: {
			type: Boolean,
			default: false,
		}
	}
})
