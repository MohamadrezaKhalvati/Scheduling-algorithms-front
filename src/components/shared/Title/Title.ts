import { defineComponent } from "vue"

export default defineComponent({
	props: {
		title: {
			type: String,
			default: ""
		},
		tag: {
			type: String,
			default: ""
		},
		titleClass: {
			type: String,
			default: "text-center"
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
