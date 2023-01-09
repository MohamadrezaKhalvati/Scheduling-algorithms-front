import { defineComponent } from "vue"

export default defineComponent({
	props: {
		heroImage: {
			type: String,
			default: ""
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
