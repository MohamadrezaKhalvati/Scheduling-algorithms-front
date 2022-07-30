import moment from "jalali-moment"
import { readReport } from "src/composition/useReport"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, ref, watch } from "vue"
import VueApexCharts from "vue3-apexcharts"
export default defineComponent({
    el: "#app",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const { getWorkHoursClassifiedReport, searchInput } = readReport()
        const { user } = userInformation()
        const category = ref(null)
        const unit = ref(null)
        const reportChartData = ref([])

        const apexChartOptions = ref({
            series: [],
            chart: {
                id: "reportChartId",
                type: "bar",
                height: 250,
                stacked: true,
                toolbar: {
                    show: false,
                    tools: {
                        download: false
                    }
                },
                zoom: {
                    enabled: false
                },
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: "buttom",
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                }
            },
            legend: {
                position: "top",
                height: "30px",
                labels: {
                    colors: "#d0d2d6",
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5
                },
                markers: {
                    width: 20,
                    height: 20,
                    radius: 3,
                    offsetX: 10,
                },
            },
            xaxis: {
                type: "string",
                categories: [],
                labels: {
                    rotate: 0,
                    show: true,
                    style: {
                        colors: "#d0d2d6",
                        fontSize: "12px",
                        fontFamily: "Vazir",
                    },
                    offsetX: 0,
                    offsetY: 0,
                },
                axisBorder: {
                    show: true,
                    colors: "#d0d2d6"
                }
            },
            yaxis: {
                show: true,
                axisTicks: {
                    show: true,
                },
                labels: {
                    formatter: function (value) {
                        if (value) {
                            const text = `${value.toFixed(0)} ساعت`
                            return text
                        }
                        return value

                    },
                    show: true,
                    align: "center",
                    style: {
                        colors: "#d0d2d6",
                        fontSize: "12px",
                        fontFamily: "Vazir",

                    },
                    offsetX: 0,
                    offsetY: 0,
                },
                axisBorder: {
                    show: false,
                }
            },
        })
        const categoryOptions = [
            "دسته بندی", "پروژه"
        ]
        const unitOptions = [
            1,
            7,
            30
        ]

        watch(() => user.value.userId, async () => {
            searchInput.value.userId = user.value.userId
            reportChartData.value = await getWorkHoursClassifiedReport()
            mapReportChartSeries(reportChartData.value)
            apexChartOptions.value.series = reportChartData.value

            window["ApexCharts"].exec("reportChartId", "updateOptions", apexChartOptions.value)

        })

        watch(() => reportChartData.value, () => {
            mapReportChartSeries(reportChartData.value)
            apexChartOptions.value.series = reportChartData.value
        })

        async function getReportDataWithFilter() {
            apexChartOptions.value.series = []
            apexChartOptions.value.xaxis.categories = []

            searchInput.value.mode = category.value || searchInput.value.mode
            searchInput.value.unit = unit.value || searchInput.value.unit
            searchInput.value.duration.startDate = moment().add(-(searchInput.value.unit * 7), "days").format("YYYY-MM-DD")
            searchInput.value.duration.endDate = moment().add(-1, "days").format("YYYY-MM-DD")


            reportChartData.value = await getWorkHoursClassifiedReport()

            mapReportChartSeries(reportChartData.value)
            apexChartOptions.value.series = reportChartData.value

            window["ApexCharts"].exec("reportChartId", "updateOptions", apexChartOptions.value)
        }
        // 
        function mapReportChartSeries(reportChartData) {
            const buffTime = ref(searchInput.value.duration.endDate)

            const series = []
            if (reportChartData.length >= 0) {

                for (let index = 0; index < 7; index++) {

                    const jDate = (moment(buffTime.value).locale("fa").format("DD"))
                    const jMonth = moment(buffTime.value).locale("fa").format("jMMMM")

                    const dateText = `${jDate}  ام ${jMonth}`
                    series.push(
                        dateText
                    )
                    buffTime.value = moment(buffTime.value).add(-searchInput.value.unit, "days").format("YYYY-MM-DD")
                }

                apexChartOptions.value.xaxis.categories = series.reverse()

            }
        }

        async function nextPage() {
            apexChartOptions.value.series = []
            apexChartOptions.value.xaxis.categories = []
            searchInput.value.duration.startDate = moment(searchInput.value.duration.startDate).add(7, "days").format("YYYY-MM-DD")
            searchInput.value.duration.endDate = moment(searchInput.value.duration.endDate).add(7, "days").format("YYYY-MM-DD")

            reportChartData.value = await getWorkHoursClassifiedReport()
            mapReportChartSeries(reportChartData.value)

            if (Object.keys(reportChartData.value).length > 0) {
                apexChartOptions.value.series = reportChartData.value
            } else {
                apexChartOptions.value.series = [{ name: "", data: [] }]
            }

            window["ApexCharts"].exec("reportChartId", "updateOptions", apexChartOptions.value)


        }
        async function previousPage() {
            apexChartOptions.value.series = []
            apexChartOptions.value.xaxis.categories = []
            searchInput.value.duration.startDate = moment(searchInput.value.duration.startDate).add(-7, "days").format("YYYY-MM-DD")
            searchInput.value.duration.endDate = moment(searchInput.value.duration.endDate).add(-7, "days").format("YYYY-MM-DD")

            reportChartData.value = await getWorkHoursClassifiedReport()
            mapReportChartSeries(reportChartData.value)
            if (Object.keys(reportChartData.value).length > 0) {
                apexChartOptions.value.series = reportChartData.value
            } else {
                apexChartOptions.value.series = [{ name: "", data: [] }]
            }

            window["ApexCharts"].exec("reportChartId", "updateOptions", apexChartOptions.value)
        }

        return {
            unitOptions,
            apexChartOptions,
            categoryOptions,
            category,
            unit,
            getReportDataWithFilter,
            nextPage,
            previousPage
        }
    }

})