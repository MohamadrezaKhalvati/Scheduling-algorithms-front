import { useSize } from "src/boot/size"
import { computed, defineComponent } from "vue"

export default defineComponent({
	components: {},
	props: {
		props: {
			type: Object,
			default: () => ({})
		},
		keyField: {
			type: String,
			default: "action"
		},
		isVisible: {
			type: Boolean,
			default: false
		}
	},
	emits: ["delete", "edit"],
	setup(props, { emit }) {
		const size = useSize()

		const computedOpacity = computed(() => {
			const isXs = size.state.value.xs && !size.state.value.sm

			return {
				opacity: props.isVisible || isXs ? 1 : 0
			}
		})

		function deleteRow() {
			emit("delete")
		}


		function editRow() {
			emit("edit")
		}

		return {
			computedOpacity,
			deleteRow,
			editRow
		}
	}
})
