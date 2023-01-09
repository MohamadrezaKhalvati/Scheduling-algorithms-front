
import UploadDialog from "src/components/core/UploadDialog/UploadDialog.vue"
// import { UploadDialogInput } from "src/components/core/UploadDialog/UploadDialog"
// import { PlyInput } from "src/components/shared/VideoPlayer/VideoPlayer"
import { computed, ComputedRef, defineComponent, ref } from "vue"
import { Dialog } from "quasar"
import { useUser } from "src/compositions/core/user.composition"
import { useRouter } from "vue-router"
import { Input } from "postcss"
import { Role } from "src/utils/graphql/zeus"


export type PresentationSlideInput = {
	// upload: UploadDialogInput;
	slide: string;
}

export default defineComponent({
	name: "PresentationSlide",
	components: {
		UploadDialog,
	},
	props: {
		input: {
			type: Object as () => PresentationSlideInput,
			required: true
		}
	},
	emits: ["newFile"],

	setup(props, ctx) {
		const user = useUser()
		const routerInstance = useRouter()
		const Authorization =	localStorage.getItem("token")
		const presentationId = routerInstance.currentRoute.value.path.split("/").pop()
		const showUploadDialog = ref(false)
		const Input = ref(props.input)
		const AdminRole = Role.Admin
		// const DocInput = ref()
		const DocInput = computed(() => {
			return {
				src:"http://20.20.20.107:80/" + props.input.slide,
			}
		})

		function openDialog() {
			showUploadDialog.value = true
		}

		function formFieldFactory(fileList: File[]) {
			return [
				{
					name: "id",
					value: presentationId
				}
			]
		}

		function headerFactory(){
			return [{name: 'Authorization', value: `jwt ${Authorization}`}]
		}

		DocInput

		return {
			DocInput,
			user,
			openDialog,
			showUploadDialog,
			formFieldFactory,
			headerFactory,
			Input,
			AdminRole
		}
	}
})
