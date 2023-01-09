
import { Form } from "src/components/core/form"
import { Field } from "src/components/core/form"
import FormContainer from "src/components/core/form/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/core/form/FormContainer/FormContainer"
import { Validators } from "src/utils/validator"
import { defineComponent, ref, Ref, watch } from "vue"
import { VueDraggableNext } from "vue-draggable-next"
import { ChangeDocumentOrderInputType, ReadDocumentaionDateType, useDocumentation } from "src/compositions/documentation.comosition"

type OptionType = {
	value: string
	label: string
}

export default defineComponent({
	name: "DocumentSection",
	components: {
		FormContainer,
		draggable: VueDraggableNext
	},
	props: {
		options: {
			type: Array as () => OptionType[],
			default: () => []
		}
	},
	emits: [],
	setup(props) {
		const dialog = ref(false)
		const loading = ref(false)
		const draggableItems = ref([])
		const value = ref(true)
		const { readDocumentMut, changeDocumentOrderMut } = useDocumentation()
		const form = new Form({
			doc: {
				autofocus: true,
				component: Field.Select,
				options: [],
				label: "نام بخش",
				class: "col-12",
				rules: [Validators.required]
			}
		})

		const container: Ref<ContainerData> = ref({
			title: "انتخاب مستند جدید",
			loading: false
		})

		function chooseNewDoc() {
			dialog.value = true
		}

		async function changeDocumentOrder() {
			const changeDocumentOrder: ChangeDocumentOrderInputType = {
				data: draggableItems.value.map((item, index) => ({
					id: item.id,
					order: index + 1
				})),
				parentDocumentId: draggableItems.value[0].parentId
			}
			const response = await changeDocumentOrderMut(changeDocumentOrder)

		}

		async function onDrop(e) {
			let indexer = 0
			loading.value = true
			await changeDocumentOrder()
			loading.value = false
			draggableItems.value = draggableItems.value.map(item => ({
				...item,
				orderNumber: indexer++
			}))
		}

		async function documentQuery() {
			const input: ReadDocumentaionDateType = {
				where: {
					parentDocumentId: form.modelValue.value.doc
				},
				sortBy: {
					descending: false,
					field: "order"
				},
			}
			const response = await readDocumentMut(input)
			return { Documents: { queryList: response.readDocument.data } }
		}

		function getGhostParent() {
			return document.body
		}

		async function getDocument() {
			try {

				container.value.loading = true
				const data = await documentQuery()
				let indexer = 0
				const sortedDocs = data.Documents.queryList
					.sort((first, second) => first.order - second.order)
				draggableItems.value = sortedDocs.map(item => ({
					id: (item.id).toString(),
					title: item.title,
					parentTitle: item.parentDocument?.title,
					parentId: item.parentDocument?.id,
					orderNumber: indexer++
				}))
				form.reset()
				dialog.value = false
				container.value.loading = false
				value.value = false
			} catch {
				dialog.value = false
				container.value.loading = false
			}

		}

		watch(() => props.options, () => {
			const docField = form.fields.value.doc
			docField.options = props.options
			if (!docField.options.find(item => item.value == "all"))
				docField.options.unshift({ value: "all", label: "<مستند های مادر>" })
		})
		return {
			form,
			container,
			dialog,
			chooseNewDoc,
			onDrop,
			getGhostParent,
			getDocument,
			draggableItems,
			value
		}
	}
})

