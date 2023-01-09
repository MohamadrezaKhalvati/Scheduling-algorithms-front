import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"
import ExpansionItem from "src/components/shared/ExpansionItem/ExpansionItem.vue"
import { ExpanstionItemType } from "src/components/shared/ExpansionItem/ExpansionItem"

export type SuperscriptionInputType = {
	title: string;
	description: string;
	questions: ExpanstionItemType[];
}

export default defineComponent({
	components: {
		Title,
		ExpansionItem,
		CloudImage
	},
	props: {
		title: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		},
		questions: {
			type: Array as () => ExpanstionItemType[],
			required: true
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
