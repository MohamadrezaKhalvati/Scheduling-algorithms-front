import Title from "src/components/shared/Title/Title.vue"
import { defineComponent, PropType } from "vue"

export type PostContentInput = {
	post: PostType;
	skeleton: boolean;
}

export type PostType = {
	title: string;
	presenter: string;
	presenterImage: string;
	description: string;
	date: string;
	image: string;
	tagList: string[];
}

export default defineComponent({
	name: "PostContent",
	components: {
		Title
	},
	props: {
		post: {
			type: Object as PropType<PostType>,
			required: true,
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup() {
		return {}
	}
})
