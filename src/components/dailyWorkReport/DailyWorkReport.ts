import { readReport, ReportType } from "src/composition/useReport"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, ref, watch } from "vue"


export default defineComponent({
    setup() {

        const { getReportData } = readReport()
        const { user } = userInformation()
        const filter = ref(false)
        const dateFrom = ref("")
        const dateTo = ref("")

        const columns = [
            { name: "number", align: "center", label: "شماره", field: "number" },
            { name: "reportDate", required: true, label: "تاریخ گزارش", align: "left", field: "reportDate", format: val => `${val}`, sortable: true },
            { name: "createReportDate", label: "تاریخ ثبت گزارش", field: "createReportDate" },
            { name: "totalHour", label: "مجموعه ساعت", field: "totalHour" },
            { name: "validity", label: "اعتبار", field: "validity" },
        ]

        const reportOptions = ref<ReportType[]>([])

        watch(() => user.value.userId, async () => {
            reportOptions.value = await getReportData()
        })

        return {
            columns,
            reportOptions,
            filter,
            dateFrom,
            dateTo
        }
    }
}) 