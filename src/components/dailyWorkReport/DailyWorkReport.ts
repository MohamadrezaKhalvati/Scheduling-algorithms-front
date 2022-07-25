import moment from "jalali-moment"
import { readReport, ReportTableRowsType, ReportTableRowType } from "src/composition/useReport"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, PropType, ref, watch } from "vue"


export default defineComponent({
    props: {
        propsRows: {
            type: Array as PropType<ReportTableRowType[]>,
            default: () => []
        },
        propsColumns: {
            type: Array as PropType<ReportTableRowsType[]>,
            default: () => []
        }
    },

    setup() {

        const { getReportData, getReportDataByFilter } = readReport()
        const { user } = userInformation()
        const filter = ref(false)
        const dateFrom = ref("")
        const dateTo = ref("")
        const loading = ref(false)

        const pagination = ref({
            sortBy: "date",
            descending: true,
            page: 1,
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

        const reportOptions = ref<ReportTableRowType[]>([])

        async function getReportDataByFilterr() {
            const dateToInGeorgian = moment.from(dateTo.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
            const dateFromInGeorgian = moment.from(dateFrom.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
            const data = await getReportDataByFilter(dateFromInGeorgian, dateToInGeorgian)
            reportOptions.value = data
            filter.value = false

        }


        function getReportDataWithPagination(props) {
            console.log(props)

        }
        // const { sortBy, descending, page, rowsPerPage } = props.pagination

        // loading.value = true
        // pagination.value.rowsPerPage = rowsPerPage

        // const startRow = (page - 1) * rowsPerPage
        // const searchInput: ApiPagination = {
        //     pagination: {
        //         take: rowsPerPage,
        //         skip: startRow
        //     },
        //     sortBy: {
        //         descending: descending,
        //         sortBy: sortBy
        //     }
        // }
        // console.log(searchInput)

        // console.log(page)

        // reportOptions.value = await GetReportDataPagination(searchInput)

        // pagination.value.page = page
        // pagination.value.rowsPerPage = rowsPerPage
        // pagination.value.sortBy = sortBy
        // pagination.value.descending = descending
        // loading.value = false


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