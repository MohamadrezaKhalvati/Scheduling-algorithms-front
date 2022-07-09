import { defineComponent } from "vue"


export default defineComponent({
    setup() {
        const columns = [
            { name: "number", align: "center", label: "شماره", field: "number" },
            { name: "reportDate", required: true, label: "تاریخ گزارش", align: "left", field: "reportDate", format: val => `${val}`, sortable: true },
            { name: "createReportDate", label: "تاریخ ثبت گزارش", field: "createReportDate" },
            { name: "totalHour", label: "مجموعه ساعت", field: "totalHour" },
            { name: "validity", label: "اعتبار", field: "validity" },
        ]

        const rows = [
            {
                number: "#1",
                reportDate: "1401/04/17",
                createReportDate: "1401/04/17",
                totalHour: "0:00",
                validity: true
            },
            {
                number: "#2",
                reportDate: "1401/04/16",
                createReportDate: "1401/04/17",
                totalHour: "6:10",
                validity: true
            }, {
                number: "#3",
                reportDate: "1401/04/15",
                createReportDate: "1401/04/17",
                totalHour: "7:50",
                validity: true
            }, {
                number: "#4",
                reportDate: "1401/04/14",
                createReportDate: "1401/04/17",
                totalHour: "8:45",
                validity: true
            },
            {
                number: "#5",
                reportDate: "1401/04/13",
                createReportDate: "1401/04/14",
                totalHour: "8:20",
                validity: true
            },
            {
                number: "#6",
                reportDate: "1401/04/12",
                createReportDate: "1401/04/13",
                totalHour: "10:15",
                validity: true
            }
        ]

        return {
            columns,
            rows
        }
    }
}) 