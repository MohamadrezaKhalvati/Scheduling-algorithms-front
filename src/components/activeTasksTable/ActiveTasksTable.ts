import moment from "jalali-moment"
import { readTask } from "src/composition/useTasks"
import { userInformation } from "src/composition/useUserInformation"
import { TaskModel } from "src/utils/swagger/Api"
import { defineComponent, ref, watch } from "vue"
export default defineComponent({
    setup() {
        const { getReadTaskData, getCategoryName, getProfileName, getReadTaskDataByFilter } = readTask()
        const { user } = userInformation()
        const activityTask = ref<TaskModel[]>()
        const filter = ref(false)
        const dense = ref(false)
        const denseOpts = ref(false)
        const categoryModel = ref(null)
        const providedModel = ref(null)
        const dateFrom = ref(null)
        const dateTo = ref(null)
        const taskName = ref("")
        const categoryOptions = ref([])
        const providedOptions = ref([])
        let dateToInGeorgian = null
        let dateFromInGeorgian = null
        let categoryName = null
        let title = null
        let providedName = null
        async function getTaskDaTaByfilterr() {
            if (dateTo.value) {
                dateToInGeorgian = moment.from(dateTo.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY-MM-DD")
            }
            if (dateFrom.value) {
                dateFromInGeorgian = moment.from(dateFrom.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY-MM-DD")
            }
            if (categoryModel.value) {
                categoryName = categoryModel.value
            }
            if (taskName.value) {
                title = taskName.value
            }
            if (providedModel.value) {
                providedName = providedModel.value
            }

            const taskDataByFilter = await getReadTaskDataByFilter({ dateFromInGeorgian, dateToInGeorgian, categoryName, providedName, title })
            activityTask.value = taskDataByFilter
            filter.value = false

        }
        const pagination = ref({
            sortBy: "desc",
            descending: false,
            page: 1,
            rowsPerPage: 5,
            rowsNumber: 3
        })
        const columns = [
            { name: "number", align: "left", label: "شماره", field: "number" },
            { name: "title", required: true, label: "نام تسک", align: "left", field: "title", format: val => `${val}`, sortable: true },
            { name: "deadline", label: "مهلت پایانی", align: "left", field: "deadline", sortable: true },
            { name: "status", label: "وضعیت", field: "status", sortable: true, align: "left" },
            { name: "project", label: "پروژه", field: "project", align: "left" },
            { name: "category", label: "دسته بندی", field: "category", sortable: true, align: "left" },
        ]
        watch(() => user.value.userId, async () => {
            activityTask.value = await getReadTaskData()

            categoryOptions.value = await getCategoryName()
            providedOptions.value = await getProfileName()
        })
        return {
            categoryOptions,
            getTaskDaTaByfilterr,
            categoryModel,
            denseOpts,
            columns,
            filter,
            dense,
            providedModel,
            dateFrom,
            dateTo,
            activityTask,
            providedOptions,
            pagination,
            taskName,
        }
    }
})