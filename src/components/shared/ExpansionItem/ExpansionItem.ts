import { defineComponent } from "vue"

export type ExpanstionItemType = {
	id: string
	label: string
	description: string
}

export default defineComponent({
	components: {
	},
	props: {
		items: {
			type: Array as () => ExpanstionItemType[],
			required: true,
		}
	},
	setup(props) {
		//
	}
})
