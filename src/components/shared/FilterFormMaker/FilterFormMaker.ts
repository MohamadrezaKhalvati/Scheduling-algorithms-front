import { useSize } from "src/boot/size"
import FormMaker from "src/components/base/forms/FormMaker/FormMaker.vue"
import { Form } from "src/components/core/form"
import { defineComponent, onUnmounted } from "vue"

export default defineComponent({
	components: {
		FormMaker
	},
	props: {
		form: {
			type: Object as () => Form<any>,
			required: true
		},
		loading: {
			type: Boolean,
			required: true,
		}
	},
	emits: ["filter"],
	setup(props, { emit }) {
		const size = useSize()

		function handleCtrlEnter(e: KeyboardEvent) {
			if (e.key === "Enter" && e.ctrlKey) {
				filter()
				e.preventDefault()
				e.stopPropagation()
			}
		}

		async function filter() {
			const isValid = await props.form.validate()
			if (isValid) emit("filter")
		}

		document.addEventListener("keydown", handleCtrlEnter, { capture: true })

		onUnmounted(() => document.removeEventListener("keydown", handleCtrlEnter))

		return {
			filter,
			size,
		}
	}
})
