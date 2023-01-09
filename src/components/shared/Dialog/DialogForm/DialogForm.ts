
import { useDialogPluginComponent } from "quasar"
import DialogWrapper from "src/components/shared/Dialog/DialogWrapper.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"
import { Form } from "src/components/core/form"
import FormMaker from "src/components/core/form/FormMaker/FormMaker.vue"
import DialogHeader from "../DialogHeader/DialogHeader.vue"

export default defineComponent({
	components: {
		DialogWrapper,
		FormMaker,
		DialogHeader,
		Title
	},
	props: {
		form: {
			type: Object as () => Form<any>,
			required: true,
		},
		submitTitle: {
			type: String,
			default: "جستجو"
		},
		headerTitle: {
			type: String,
			default: "فرم جستجو"
		}
	},
	emits: ["filter", "ok"],
	setup(props, { emit }) {
		const dialog = useDialogPluginComponent()

		function submit() {
			emit("filter", props.form.modelValue)
			dialog.onDialogOK()
		}

		return {
			...dialog,
			submit
		}

	}
})

