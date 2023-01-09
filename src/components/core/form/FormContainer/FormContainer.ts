import { QForm } from "quasar"
import { computed, defineComponent, onMounted, PropType, ref } from "vue"
import FormMaker from "../FormMaker/FormMaker.vue"
import Form from "../models/form"

export default defineComponent({
	components: {
		FormMaker
	},
	props: {
		form: {
			type: Object as PropType<Form<any>>,
			default: () => ({})
		},
		container: {
			type: Object as PropType<ContainerData>,
			default: () => ({})
		}
	},
	emits: ["update:container"],
	setup(props, { emit }) {
		const formMaker = ref(null)

		onMounted(() => {
			emit("update:container", {
				...props.container,
				ref: formMaker.value.qForm
			})
		})


		const containerConfig = computed((): ContainerData => {
			const newConfig = {
				...props.container,
				class: {
					bodyClass: "p-2"
				}
			}
			return newConfig
		})

		return {
			formMaker,
			containerConfig
		}
	}
})

export type ContainerData = {
	title?: string;
	ref?: QForm;
	class?: object;
	loading?: boolean;
};
