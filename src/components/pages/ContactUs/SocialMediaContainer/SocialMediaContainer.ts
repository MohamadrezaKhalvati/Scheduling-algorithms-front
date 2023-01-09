
import { defineComponent, PropType } from "vue"

export type SocialMediaInput = {
	src: string;
	link: string;
}

export default defineComponent({
	props: {
		inputs: {
			type: Array as PropType<SocialMediaInput[]>,
			required: true,
		}
	},
})
