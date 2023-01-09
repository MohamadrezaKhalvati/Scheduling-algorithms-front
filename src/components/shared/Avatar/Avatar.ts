
import { computed, defineComponent } from "vue"

export default defineComponent({
	props: {
		skeleton: Boolean,
		image: {
			type: String,
			default: "/images/user.png"
		},
		iconSize: {
			type: String,
			default: "38px"
		}
	},
	setup(props) {
		const computedStyle = computed(() => ({
			width: props.iconSize,
			height: props.iconSize,
		}))

		return {
			computedStyle
		}
	}
})

