
import { defineComponent, PropType } from "vue"

export type linkData = {
	title: string;
	disable: boolean;
	link: string;
}

export default defineComponent({
	props: {
		linkTitle: {
			type: String,
			required: true,
		},
		linkData: {
			type: Array as PropType<linkData[]>,
			required: true,
		}
	},
})
