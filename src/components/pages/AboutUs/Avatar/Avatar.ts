import { defineComponent, PropType } from "vue"

export type AvatarInput = {
	title: string;
	image: string;
	name: string;
	linkedInLink: string;
	instagramLink: string;
}

export default defineComponent({
	props: {
		input: {
			type: Object as PropType<AvatarInput>,
			required: true,
		}
	},
})
