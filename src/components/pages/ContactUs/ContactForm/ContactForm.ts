import { Form } from "src/components/base/forms"
import FormContainer from "src/components/base/forms/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/base/forms/FormContainer/FormContainer"
import { defineComponent, PropType } from "vue"

export default defineComponent({
	components: {
		FormContainer
	},
	props: {
		form: {
			type: Object as PropType<Form<any>>,
			required: true,
		},
		container: {
			type: Object as PropType<ContainerData>,
			required: true,
		},
	},
	emits: ["submit"],
})
