/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuasar } from "quasar"
import { Field, Form } from "src/components/core/form"
import FormContainer from "src/components/core/form/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/core/form/FormContainer/FormContainer"
import FormMaker from "src/components/core/form/FormMaker/FormMaker.vue"
import TableContainer from "src/components/core/table/TableContainer/TableContainer.vue"
import { TableConfig, TableContainerConfig } from "src/components/core/table/TableContainer/TableContainer"
import TableFilter from "src/components/core/table/TableFilter/TableFilter.vue"
import VideoPlayer from "src/components/shared/VideoPlayer/VideoPlayer.vue"
import { PlyInput } from "src/components/shared/VideoPlayer/VideoPlayer"
import config from "src/config.json"
import { Validators } from "src/utils/validator"
import { defineComponent, ref, Ref, computed } from "vue"
import { useRouter } from "vue-router"
import { useUser } from "src/compositions/core/user.composition"
import { fetchService } from "src/boot/fetch-service"
import TableTitle from "src/components/shared/TableTitle/TableTitle.vue"
import { MediaType } from "src/utils/graphql/zeus"
import { useNotification } from "src/compositions/core/notify.composition"
import { usePagination } from "src/compositions/core/pagination.composition"
import { useCourseSection } from "src/compositions/Panel/CourseSection.composition"

type Entity = any

export type MoveCourseVideoInput = {
	sectionId: string
	videoList: Entity[]
}

export type CourseVideoInput = {
	// upload: UploadDialogInput;
	video: string;
	previewImage: string;
}

export default defineComponent({
	components: {
		TableContainer,
		TableFilter,
		VideoPlayer,
		FormMaker,
		FormContainer,
		TableTitle
	},
	props: {},
	emits: ["moveVideo", "deleteVideo"],
	setup(props, { emit }) {
		const routerInstance = useRouter()
		const courseStoreData = ref()
		const user = useUser()
		const Authorization =	localStorage.getItem("token")
		const tab = ref("embedLink")
		const showUploadDialog = ref(false)
		const { successText, errorText } = useNotification()
		const entityId = ref(routerInstance.currentRoute.value.path.split("/").pop())
		const urlArray =ref()
		const file = ref()
		const { getCourseSection } = useCourseSection()
		const showAdd = () => {
			showUploadDialog.value = true
		}

		const qTableConfig = ref<TableConfig<Entity>>({
			loading: false,
			rows: [],
			selection: "single",
			selected: [],
			indexer: true,
			setIndex: true,
			pagination: {
				page: 1,
				rowsPerPage: 8,
				rowsNumber: 0,
			},
			rowsPerPageOptions: [],
			events: {},
			columns: [
				{
					key: "name",
					label: "نام فایل آپلود شده",
				},
				{
					key: "volume",
					label: "حجم فایل",
				},
				{
					key: "view"
				},
			],
		})

		const plyInput: Ref<PlyInput> = ref({
			src: null,
			settings: {
				autoplay: true
			}
		})

		const playVid = ref(false)


		const userContainer = ref({
			title: "نمایش فایل های ویدیویی آپلود شده",
			add: null
		})

		// : Ref<TableContainerConfig>

		const linkForm = new Form({
			name: {
				component: Field.Text,
				label: "نام",
				class: "col-12",
				clearable: true,
				icon: "link",
				rules: [Validators.required]
			},
			link: {
				component: Field.Text,
				label: "لینک امبد",
				class: "col-12",
				clearable: true,
				icon: "link",
				rules: [Validators.required]
			},
			time: {
				component: Field.Clock,
				label: "تایم ویدئو",
				class: "col-12",
				clearable: true,
				icon: "schedule",
				rules: [Validators.required]
			}
		})

		const linkContainer: Ref<ContainerData> = ref({
			title: "آپلود لینک امبد",
			loading: false
		})

		function courseVideoQuery(take, skip) {
			return fetchService.query({
				 readMedia: [
					{
					where: {
						moduleObjectId: entityId.value
					},
					pagination: {
						take: take,
						skip: skip
					}
					}, {
						count: true,
						data: {
							id: true,
							name:true,
							size: true,
							fileUrl: true
						}
					}
				]
			})
		}

		const paginator = usePagination({
			itemPerPage: 8,
			callback: async (take, skip) =>  {
					const { readMedia } = await courseVideoQuery(take, skip)
				  urlArray.value = readMedia.data.map((item) => {
						return {
							url: item.fileUrl,
							id:item.id
						}
					})
					const queryList = readMedia.data.map(item => {
					const volume = item.size / 10000
						return {
							name: item.name,
							volume: `${ Math.round(volume) / 100} MB`,
							id : item.id
						}
					})
					qTableConfig.value.rows = queryList
					return { data: queryList, count: readMedia.count }
				}
		})

		const tablePagination = computed(() => ({
			page: paginator.currnetPage.value,
			rowsPerPage: paginator.itemPerPage.value,
			rowsNumber: paginator.maxNumberOfItems.value
	  }))

		async function createCourseVideo(file) {
			let data = new FormData()
			data.append('file', file[0])
			data.append("module", "CourseModule")
			data.append("moduleObjectId", entityId.value)
			const Authorization =	localStorage.getItem("token")
				 fetch(`http://20.20.20.107:8000/multer/addMedia/`, {
					 method: 'POST',
					 headers: {
						 Authorization: `jwt ${Authorization}`,
					 },
					 body: data
				 }).then(() => {showUploadDialog.value = false})

		}

		function formFieldFactory(fileList: File[]) {
			return [
				{
					name: "module",
					value: "CourseModule"
				},
				{
					name: "moduleObjectId",
					value: entityId.value
				}
			]
		}

		function headerFactory(){
			return [{name: 'Authorization', value: `jwt ${Authorization}`}]
		}

		function createForm() {
			return new Form({
				video: {
					component: Field.Text,
					icon: "description",
					url: `${config.serverAddress}/courseVideo`,
					label: "ویدیو",
					class: "col-12",
					events: {
						uploaded: () => {
							paginator.getData()
						}
					},
					rules: [Validators.required]
				},
			})
		}

		const uploadForm: Ref<ReturnType<typeof createForm>> = ref(null)

		function openVideo(video: Entity) {
			// console.log(urlArray.value)
				urlArray.value.map((item) => {
					if(item.id == video.id && item.url[0] == "/") {
					  return plyInput.value.src = `http://20.20.20.107:80/${item.url}`, playVid.value = true, console.log(plyInput.value.src)
					} else if(item.id == video.id && item.url[0] != "/") {
						return plyInput.value.src = item.url , playVid.value = true, console.log(plyInput.value.src)
					}

				}
			)
		}

		function uploadVideo() {
			showUploadDialog.value = true
		}

		const deleteVideoQuery = () => {
			const selectedRowId = qTableConfig.value.selected[0].id
		  return fetchService.mutation({
			  removeMediaFromCourse: [{where: {mediaID: selectedRowId}}, {success: true}]
		  })
		}

		const deleteVideo = async () => {
		  try {
		    await deleteVideoQuery()
		    emit("deleteVideo")
				successText()
				// notifyConfig.success
		    paginator.getData()
				qTableConfig.value.loading = false
		  }
		  catch {
		    qTableConfig.value.loading = false
		  }

		}

		async function getData () {
			const result =  await fetchService.query({
				 readCourseModule: [{where:{
					 courseId: entityId.value
					}}, {
					 data: {
						 title: true,
						 id: true,
						 course: {
							 title: true
						 },
						 mediaList: {
							 name: true
						 },
					 }
				 }]
			 })

			 courseStoreData.value = result.readCourseModule.data
		 }

		async function submitLink() {
			const Time = linkForm.modelValue.value.time
			const Hour = Time.length == 4?(Number(Time.slice(0, 1)) * 3600): (Number(Time.slice(0, 2)) * 3600)
			const Minute = Time.length == 4? (Number(Time.slice(2, 4)) * 60): (Number(Time.slice(3, 5)) * 60)
			await fetchService.mutation({
				addMediaWithLink: [{data: {
					duration: Hour + Minute,
					mediaLink: linkForm.modelValue.value.link,
					name: linkForm.modelValue.value.name,
					moduleObjectId: entityId.value,
					module: MediaType.CourseModule
				}}, {
					id: true,
				}]
			})
			showUploadDialog.value = false
			await paginator.getData()
		}

		const adminContainer = ref({
			title: "نمایش فایل های ویدیویی آپلود شده",
			add: {
				handler: () => uploadVideo()
			},
			delete: {
				// handler: () => deleteVideo()
			}
		})

		 getData()


		async function moveItems(sectionId: string | number) {
			const id = sectionId.toString()
			const data: MoveCourseVideoInput = {
				sectionId: id,
				videoList: qTableConfig.value.selected.map((item) => { return item.id})
			}
			emit("moveVideo", data)
			await fetchService.mutation({
				addMediaToCourseModule: [{
					data: {
						courseModuleId: data.sectionId,
						mediaId: data.videoList[0]
					}
				}, {
					module: true,
					id: true
				}]
			})
			await getCourseSection(entityId.value)
			paginator.getData()
		}

		//: Ref<TableContainerConfig>
		paginator.getData()

		return {
			courseStoreData,
			user,
			paginator,
			tab,
			showUploadDialog,
			uploadForm,
			qTableConfig,
			plyInput,
			playVid,
			adminContainer,
			userContainer,
			linkForm,
			linkContainer,
			createForm,
			openVideo,
			moveItems,
			uploadVideo,
			deleteVideo,
			deleteVideoQuery,
			submitLink,
			showAdd,
			createCourseVideo,
			file,
			formFieldFactory,
			Authorization,
			headerFactory,
			urlArray,
			courseVideoQuery,
			tablePagination,
		}
	}

})




