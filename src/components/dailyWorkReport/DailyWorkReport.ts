import moment from "jalali-moment"
import { readReport, ReportTableColumnsType, ReportTableRowType } from "src/composition/useReport"
import { ApiPagination } from "src/composition/useTasks"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, PropType, ref, watch } from "vue"


export default defineComponent({
    props: {
        propsRows: {
            type: Array as PropType<ReportTableRowType[]>,
            default: () => []
        },
        propsColumns: {
            type: Array as PropType<ReportTableColumnsType[]>,
            default: () => []
        }
    },

    setup() {

        const { getReportData, getReportDataByFilter, GetReportDataPagination, allReportNumber } = readReport()
        const { user } = userInformation()
        const filter = ref(false)
        const dateFrom = ref("")
        const dateTo = ref("")
        const loading = ref(false)
        const reportOptions = ref<ReportTableRowType[]>([])
        const startRow = ref(0)
        const pagination = ref({
            sortBy: "date",
            descending: true,
            page: 1,
            rowsNumber: 0,
            rowsPerPage: 6,
            rowsPerPagePageOptions: [5, 10, 50]
        })

        const columns = [
            { name: "number", align: "left", label: "شماره", field: "number" },
            { name: "reportDate", required: true, label: "تاریخ گزارش", align: "left", field: "reportDate", sortable: true },
            { name: "createReportDate", label: "تاریخ ثبت گزارش", field: "createReportDate", align: "left" },
            { name: "totalHour", label: "مجموعه ساعت", field: "totalHour", align: "left" },
            { name: "validity", label: "اعتبار", field: "validity", align: "left" },
        ]



        async function getReportDataByFilterr() {
            const dateToInGeorgian = moment.from(dateTo.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
            const dateFromInGeorgian = moment.from(dateFrom.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
            const data = await getReportDataByFilter(dateFromInGeorgian, dateToInGeorgian)
            reportOptions.value = data
            filter.value = false
        }


        async function getReportDataWithPagination(props) {
            const { sortBy, descending, page, rowsPerPage } = props.pagination
            loading.value = true
            pagination.value.rowsPerPage = rowsPerPage

            startRow.value = (page - 1) * rowsPerPage
            const searchInput: ApiPagination = {
                pagination: {
                    take: rowsPerPage,
                    skip: startRow.value
                },
                sortBy: {
                    descending: descending,
                    sortBy: sortBy
                }
            }
            reportOptions.value = await GetReportDataPagination(searchInput)
            pagination.value.page = page
            pagination.value.rowsPerPage = rowsPerPage
            pagination.value.sortBy = sortBy
            pagination.value.descending = descending
            console.log(reportOptions.value)

            pagination.value.rowsNumber = allReportNumber.value
            loading.value = false


        }

        watch(() => user.value.userId, async () => {
            reportOptions.value = await getReportData()

        })
        return {
            columns,
            reportOptions,
            filter,
            dateFrom,
            dateTo,
            pagination,
            loading,
            getReportDataByFilterr,
            getReportDataWithPagination

        }
    }
}) 