import { defineComponent } from "vue"
import { useSize } from "src/boot/size"

export default defineComponent({
	props: {
		header: {
			type: String,
			default: ""
		}
	},
	setup(props) {
		const {size} = useSize()
		return {
			props,
			size
		}
	}
})
