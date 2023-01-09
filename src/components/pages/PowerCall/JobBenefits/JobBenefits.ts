import { useSize } from "src/boot/size"
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		benefits: {
			type: Array as () => string[],
			required: true
		}
	},
	setup() {
		const size = useSize()
		return {
			size
		}
	}
})
