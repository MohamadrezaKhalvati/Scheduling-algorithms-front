import moment from "jalali-moment"
import { ApiPagination, readTask, TaskTableColumnsType, TaskTableRowType } from "src/composition/useTasks"
import { userInformation } from "src/composition/useUserInformation"
import { TaskModel } from "src/utils/swagger/Api"
import { defineComponent, PropType, ref, watch } from "vue"
export default defineComponent({

    props: {
        propsRows: {
            type: Array as PropType<TaskTableRowType[]>,
            default: () => []
        },
        propsColumns: {
            type: Array as PropType<TaskTableColumnsType[]>,
            default: () => []
        }
    },

    setup() {
        const {
            getReadTaskData,
            getCategoryName,
            getProfileName,
            getReadTaskDataByFilter,
            getTaskDataPagination,
            alltaskNumber
        } = readTask()
        const noData = ref(true)
        const { user } = userInformation()
        const activityTask = ref<TaskModel[]>()
        const filter = ref(false)
        const dense = ref(false)
        const loading = ref(false)
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
        const pagination = ref({
            sortBy: "deadline",
            descending: true,
            page: 1,
            rowsNumber: 0,
            rowsPerPage: 7,
            rowsPerPageOptions: [7, 20, 50]
        })
        const columns: TaskTableColumnsType[] = [
            { name: "number", align: "left", label: "شماره", field: "number" },
            { name: "title", required: true, label: "نام تسک", align: "left", field: "title", sortable: true },
            { name: "deadline", label: "مهلت پایانی", align: "left", field: "deadline", sortable: true },
            { name: "status", label: "وضعیت", field: "status", sortable: true, align: "left" },
            { name: "project", label: "پروژه", field: "project", align: "left" },
            { name: "category", label: "دسته بندی", field: "category", sortable: true, align: "left" },
        ]

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
            pagination.value.rowsNumber = alltaskNumber.value
            filter.value = false

        }

        watch(() => user.value.userId, async () => {
            activityTask.value = await getReadTaskData()
            noData.value = false
            categoryOptions.value = await getCategoryName()
            providedOptions.value = await getProfileName()
        })

        async function getTaskWithPagination(props) {

            const { page, rowsPerPage, sortBy, descending } = props.pagination

            loading.value = true

            const startRow = (page - 1) * rowsPerPage
            const searchInput: ApiPagination = {
                pagination: {
                    take: rowsPerPage,
                    skip: startRow
                },
                sortBy: {
                    descending: descending,
                    sortBy: sortBy
                }
            }

            const taskData = await getTaskDataPagination(searchInput)
            if (!taskData) {
                noData.value = true
            }
            activityTask.value = taskData

            pagination.value.page = page
            pagination.value.rowsPerPage = rowsPerPage
            pagination.value.sortBy = sortBy
            pagination.value.descending = descending
            pagination.value.rowsNumber = alltaskNumber.value

            loading.value = false
        }

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
            providedOptions,
            pagination,
            taskName,
            noData,
            loading,
            getTaskDaTaByfilterr,
            getTaskWithPagination
        }
    }
})