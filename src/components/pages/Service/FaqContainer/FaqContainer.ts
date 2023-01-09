import ExpansionItem from "src/components/shared/ExpansionItem/ExpansionItem.vue"
import { ExpanstionItemType } from "src/components/shared/ExpansionItem/ExpansionItem"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export default defineComponent({
	components: {
		Title,
		ExpansionItem
	},
	props: {
		faqs: {
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
