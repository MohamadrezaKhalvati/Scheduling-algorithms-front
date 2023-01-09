import { computed, defineComponent } from "vue"

export type CategoryType = {
	title: string
	id: string
}

export type ArticleType = {
	title: string
	id: string
	description: string
	duration: string
	image: string
	link: string
}
export default defineComponent({
	props: {
		article: {
			type: Object as () => ArticleType,
			required: true
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const description = computed(() => {
			return props.article.description.substring(0, 300) + "..."
		})
		return {
			description,
			props
		}
	}
})
