import { defineComponent } from "vue"


export default defineComponent({
	components: {
	},
	props: {
		skeleton: Boolean,
		size: {
			type: Number,
			required: true
		},
		enterAnimation: {
			type: String,
			required: true
		},
		leaveAnimation: {
			type: String,
			required: true
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
