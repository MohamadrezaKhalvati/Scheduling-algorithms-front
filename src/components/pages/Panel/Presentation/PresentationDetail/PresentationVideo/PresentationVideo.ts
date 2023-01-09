
import { Field, Form } from "src/components/core/form"
import FormContainer from "src/components/core/form/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/core/form/FormContainer/FormContainer"
import FormMaker from "src/components/core/form/FormMaker/FormMaker.vue"
import UploadDialog from "src/components/core/UploadDialog/UploadDialog.vue"
// import { UploadDialogInput } from "src/components/base/UploadDialog/UploadDialog"
import { PlyInput } from "src/components/shared/VideoPlayer/VideoPlayer"
import VideoPlayer from "src/components/shared/VideoPlayer/VideoPlayer.vue"
import bareServerAddress  from "src/config.json"
import { Validators } from "src/utils/validator"
import { computed, ComputedRef, defineComponent, ref, Ref } from "vue"
import { fetchService } from "src/boot/fetch-service"
import { useRouter } from "vue-router"
import { useUser } from "src/compositions/core/user.composition"
import { Role } from "src/utils/graphql/zeus"

export type PresentationVideoInput = {
	// upload: UploadDialogInput;
	video: string;
	previewImage: string;
}

export default defineComponent({
	components: {
		UploadDialog,
		VideoPlayer,
		FormContainer,
		FormMaker
	},
	props: {
		input: {
			type: Object as () => PresentationVideoInput,
			required: true,
		}
	},
	emits: ["newFile"],

	setup(props, { emit }) {
		const routerInstance = useRouter()
		const tab = ref("embedLink")
		const showUploadDialog = ref(false)
		const Authorization =	localStorage.getItem("token")
		const user = useUser()
		const Input = ref(props.input)
		const AdminRole = Role.Admin
		const presentationId = routerInstance.currentRoute.value.path.split("/").pop()
		const uploadForm = ref(new Form({
			video: {
				component: Field.Slider,
				icon: "description",
				url: `${bareServerAddress}/presentationVideo/${presentationId}`,
				label: "ویدیو",
				class: "col-12",
				events: {
					uploaded: () => {
						emit("newFile")
					}
				},
				rules: [Validators.required]
			},
		}))
		const playerInput: ComputedRef<PlyInput> = computed(() => {
			return {
				src: "http://20.20.20.107:80" + props.input.video,
				previewImage: "http://20.20.20.107:80" + props.input.previewImage,
			}
		})


		const linkForm = new Form({
			link: {
				component: Field.Text,
				label: "لینک امبد",
				class: "col-12",
				// type: "textarea",
				clearable: true,
				icon: "link",
				rules: [Validators.required]
			},
			time: {
				component: Field.Clock,
				label: "تایم ویدئو",
				class: "col-12",
				// type: "textarea",
				clearable: true,
				icon: "schedule",
				rules: [Validators.required]
			}
		})

		const linkContainer: Ref<ContainerData> = ref({
			title: "آپلود لینک امبد",
			loading: false
		})

		function addEmbedLinkToCourse(presentationId) {
			const Time = linkForm.modelValue.value.time
			const Hour = Time.length == 4?(Number(Time.slice(0, 1)) * 3600): (Number(Time.slice(0, 2)) * 3600)
			const Minute = Time.length == 4? (Number(Time.slice(2, 4)) * 60): (Number(Time.slice(3, 5)) * 60)
			return fetchService.mutation({
				addPresentationVideoWithLink: [{
					id: presentationId,
					data: {
						duration: Hour + Minute,
						videoLink: linkForm.modelValue.value.link,
					}
				}, {title: true}]
			})
		}

		function submitLink() {
			linkContainer.value.loading = true
			addEmbedLinkToCourse(presentationId).then(() => {
				linkContainer.value.loading = false
				showUploadDialog.value = false
				linkForm.reset()
				emit("newFile")
			}).catch(() => {
				linkContainer.value.loading = false
			})
		}

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

		return {
			tab,
			Input,
			showUploadDialog,
			uploadForm,
			openDialog,
			submitLink,
			playerInput,
			linkContainer,
			linkForm,
			user,
			formFieldFactory,
			headerFactory,
			AdminRole
		}
	}
})
