import { useQuasar } from "quasar"
import { fetchService } from "src/boot/fetch-service"
import { Field, Form } from "src/components/core/form"
import { ContainerData } from "src/components/core/form/FormContainer/FormContainer"
import TableFilter from "src/components/core/table/TableFilter/TableFilter.vue"
import { SectionItem, useCourseModule } from "src/compositions/core/course.composition"
import { useUser } from "src/compositions/core/user.composition"
import { confirmSettings } from "src/utils/default"
import { Validators } from "src/utils/validator"
import { defineComponent, ref } from "vue"
import { VueDraggableNext } from "vue-draggable-next"
import { MoveCourseVideoInput } from "../CourseVideo/CourseVideo"
import { useRouter } from "vue-router"
import { watch, onBeforeMount } from "vue"
import { useNotification } from "src/compositions/core/notify.composition"
import { Role } from "src/utils/graphql/zeus"
import { useCourseSection } from "src/compositions/Panel/CourseSection.composition"
export type DeleteSectionType = {
	sectionId: string
	sectionVideoId: string
}

export type CourseSectionInput = {
}


export default defineComponent({

	components: {
		TableFilter,
		draggable: VueDraggableNext
	},
	props: {},
	emits: ["deleteSection", "moveVideo", "addSection", "deleteSectionVideo"],
	setup(_, { emit }) {
		const selectedTab = ref(0)
		const courseStore = useCourseModule()
		const user = useUser()
		const quasar = useQuasar()
		const Module = ref()
		const DraggableItems = ref([])
		const moduleChild = ref()
		const routerInstance = useRouter()
		const entityId = routerInstance.currentRoute.value.path.split("/").pop()
		const orderList = ref([])
		const ModuleId = ref()
		const { getCourseSection } = useCourseSection()
		const { successText, errorText } = useNotification()
		const AdminRole = Role.Admin
		const form = new Form({
			name: {
				autofocus: true,
				component: Field.Text,
				label: "نام بخش",
				class: "col-12",
				rules: [Validators.required]
			}
		})

		const container: ContainerData = {
			title: "ایجاد بخش جدید"
		}

		async function getData () {
		const result = await getCourseSection(entityId)

			Module.value = result.readCourseModule.data

			const Array = []
			Module.value.map((item) => {
				Array.push(item)
			})
			moduleChild.value =	Array[0]
			DraggableItems.value = moduleChild.value.mediaList.map((item) => {return {title: item.name, id: item.id}})
			const Id = Module.value.map((item) => {
				return item.id
			})
			ModuleId.value = Id[0]
		}

	 async function deleteSection(sectionId: string) {
			 quasar.dialog(confirmSettings)
				.onOk(async () => {
					// emit("deleteSection", sectionId)
					await fetchService.mutation({
						deleteCourseModule: [{id:sectionId}, {title: true} ]
					})
					await getData()
				})
		}

		function changeVideoPriority(section: SectionItem) {
			const data: MoveCourseVideoInput = {
				sectionId: section.id,
				videoList: section.video
			}
			emit("moveVideo", data)
		}

		function onDrop(_, sectionId: string) {
			let indexer = 1
			const section = courseStore.data.value.find(item => item.id == sectionId)
			section.video = section.video.map(item => ({
				...item,
				index: indexer++
			}))
			changeVideoPriority(section)
		}

		function addNewSection() {
			const ref = quasar.dialog({
				component: TableFilter,
				componentProps: {
					container: container,
					form: form
				}
			})
				.onOk(async () => {
				  await fetchService.mutation({
						createCourseModule: [{
							data: {
								courseId: entityId,
								title: form.modelValue.value.name
							}
						}, {
							id: true
						}]
					})
					await getData()
					form.reset()
					ref.hide()
				})
		}

		function deleteSectionVideo(sectionId: string, sectionVideoId: string) {
			quasar.dialog(confirmSettings)
				.onOk(() => {
					emit("deleteSectionVideo", {
						sectionId,
						sectionVideoId
					})
				})
		}

		function getGhostParent() {
			return document.body
		}

		getData()

		watch(selectedTab, () => {
			const Array = []
			Module.value.map((item) => {
				Array.push(item)
			})
			const Id = Module.value.map((item) => {
				return item.id
			})
			moduleChild.value =	Array[selectedTab.value]
			ModuleId.value = Id[selectedTab.value]
			DraggableItems.value = moduleChild.value.mediaList.map((item) =>  ({title: item.name}))
		})

		const logHandler = async () => {
			orderList.value = DraggableItems.value.map((item, ctx) => {
				return{
					id: item.id,
					order: ctx + 1
				}
			})
		 await	fetchService.mutation({
				reOrderCourseModuleMedia: [{
					data: {
						courseModuleId: ModuleId.value,
						data: orderList.value
					}
				}, {
					success: true
				}]
			})

			successText()
		}

		const CourseModualeDelete = async (e) => {
			await	fetchService.mutation({
					removeMediaFromCourseModule: [{
						where: {
							mediaID: e
						}
					},{success: true}]
				})
				successText()
				await getData()
		}

		return {
			form,
			container,
			selectedTab,
			user,
			courseStoreData: courseStore.data,
			getGhostParent,
			deleteSection,
			changeVideoPriority,
			onDrop,
			addNewSection,
			deleteSectionVideo,
			Module,
			moduleChild,
			DraggableItems,
			logHandler,
			CourseModualeDelete,
			AdminRole
		}
	}
})
