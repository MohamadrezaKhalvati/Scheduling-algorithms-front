
import { QDialog, useDialogPluginComponent } from "quasar"
import { defineComponent, ref } from "vue"
import { Form } from "src/components/core/form"
import FormContainer from "src/components/core/form/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/core/form/FormContainer/FormContainer"
import { fetchService } from "src/boot/fetch-service"
import { useRouter } from "vue-router"

/**
 * @class TableFilter: Filters of table
 */
export default defineComponent({
	components: {
		FormContainer
	},
	emits: ["hide", "ok"],
	props: {
		form: {
			type: Object as () => Form<any>,
			required: true,
		}
	},
	setup(props, { emit }) {
		const dialog = ref<QDialog>(null)
		const routerInstance = useRouter()
		const entityId = routerInstance.currentRoute.value.path.split("/").pop()
		const filterContianer: ContainerData = {
			loading: false,
			title: "عملیات"
		}

		/**
		 * shows dilog
		 */
		function show() {
			dialog.value.show()
		}

		/**
		 * hides dialog
		 */
		function hide() {
			dialog.value.hide()
		}

		/**
		 * @event hide
		 */
		function onDialogHide() {
			emit("hide")
		}

		/**
		 * @event ok
		 * hides dialog after emit ok event
		 */

		 const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()
		function onOKClick() {
			onDialogOK()
			hide()
		}

		/**
		 * hides dialog
		 */
		function onCancelClick() {
			hide()
		}

		/**
		 * @event ok
		 * submits form values
		 */
		function submit() {
			emit("ok", { ...props.form.modelValue })
		}

		const inputVal = ref()

		const addMadule = () => {
			fetchService.mutation({
				// createCourseModule: [{
				// 	id: entityId,
				// 	data: {
				// 		title: inputVal.value
				// 	}
				// }]
			})
		}

		return {
			dialog,
			filterContianer,
			show,
			hide,
			onDialogHide,
			onOKClick,
			onCancelClick,
			submit,
			addMadule,
			inputVal
		}

	}
})

