import { readTask } from "src/composition/useTasks"
import { userInformation } from "src/composition/useUserInformation"
import { TaskModel } from "src/utils/swagger/Api"
import { defineComponent, ref, watch } from "vue"
export default defineComponent({
    setup() {
        const { getReadTaskData, getCategoryName, getProfileName } = readTask()
        const { user } = userInformation()
        const filter = ref(false)
        const dense = ref(false)
        const categoryModel = ref(null)
        const providedModel = ref(null)
        const denseOpts = ref(false)
        const dateFrom = ref("")
        const dateTo = ref("")

        const activityTask = ref<TaskModel[]>()


        const columns = [
            { name: "number", align: "center", label: "شماره", field: "number" },
            { name: "title", required: true, label: "نام تسک", align: "left", field: "title", format: val => `${val}`, sortable: true },
            { name: "deadline", label: "مهلت پایانی", field: "deadline", sortable: true },
            { name: "status", label: "وضعیت", field: "status", sortable: true },
            { name: "project", label: "پروژه", field: "project" },
            { name: "category", label: "دسته بندی", field: "category", sortable: true },
        ]
        const categoryOptions = ref([])
        const providedOptions = ref([])
        watch(() => user.value.userId, async () => {
            activityTask.value = await getReadTaskData()
            categoryOptions.value = await getCategoryName()
            providedOptions.value = await getProfileName()
        })
        return {
            categoryOptions,
            categoryModel,
            denseOpts,
            columns,
            filter,
            dense,
            providedModel,
            dateFrom,
            dateTo,
            activityTask,
            providedOptions
        }
    }
})