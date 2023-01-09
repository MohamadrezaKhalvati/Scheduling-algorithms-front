import { QForm } from "quasar"
import { defineComponent, onMounted, ref, watch } from "vue"
import FormField from "../FormField/FormField.vue"
import Form from "../models/form"

export default defineComponent({
	components: {
		FormField
	},
	props: {
		form: {
			required: true,
			type: Form
		},
		loading: {
			type: Boolean,
		},
	},
	emits: ["value", "update:form"],
	setup(props, { emit }) {
		const qForm = ref<QForm>(null)

		function validate() {
			let isValid = true
			const formInputs = props.form.ref.value.getValidationComponents()
			for (const { rules, value } of formInputs) {
				if (rules) {
					const result = rules.reduce((prev, currentRule) => prev && currentRule(value) === true, true)
					isValid = isValid && result
				}
			}
			return isValid
		}

		function onValChange(val) {
			//Issue with Quasar Validation Delay
			setTimeout(() => emit("value", val))
		}


		watch(() => props.form.modelValue, onValChange, { deep: true })


		onMounted(() => {
			props.form.setRef(qForm.value)
		})

		return {
			validate,
			qForm,
		}
	}

})
