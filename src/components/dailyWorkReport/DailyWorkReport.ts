import moment from "jalali-moment"
import { readReport, ReportType } from "src/composition/useReport"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, ref, watch } from "vue"


export default defineComponent({
    setup() {

        const { getReportData, getReportDataByFilter } = readReport()
        const { user } = userInformation()
        const filter = ref(false)
        const dateFrom = ref("")
        const dateTo = ref("")

        const columns = [
            { name: "number", align: "left", label: "شماره", field: "number" },
            { name: "reportDate", required: true, label: "تاریخ گزارش", align: "left", field: "reportDate", format: val => `${val}`, sortable: true },
            { name: "createReportDate", label: "تاریخ ثبت گزارش", field: "createReportDate", align: "left" },
            { name: "totalHour", label: "مجموعه ساعت", field: "totalHour", align: "left" },
            { name: "validity", label: "اعتبار", field: "validity", align: "left" },
        ]

        const reportOptions = ref<ReportType[]>([])

        async function getReportDataByFilterr() {
            const dateToInGeorgian = moment.from(dateTo.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
            const dateFromInGeorgian = moment.from(dateFrom.value, "fa", "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
            const data = await getReportDataByFilter(dateFromInGeorgian, dateToInGeorgian)
            reportOptions.value = data
            filter.value = false

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
            getReportDataByFilterr
        }
    }
}) 