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

            reportChartData.value = await getWorkHoursClassifiedReport()
            apexChartOptions.value.series = reportChartData.value
            window["ApexCharts"].exec("reportChartId", "updateOptions", apexChartOptions.value)
        })

        watch(() => reportChartData.value, () => {
            const buffTime = ref(searchInput.value.duration.endDate)

            const series = []
            if (reportChartData.value.length >= 0) {

                for (let index = 0; index < 7; index++) {

                    const jDate = (moment(buffTime.value).locale("fa").format("YYYY-MM-DD")).split("-")[2]
                    const a = "تیر"
                    const dateText = `${jDate}  ام ${a}`
                    apexChartOptions.value.xaxis.categories.push(
                        dateText
                    )
                    buffTime.value = moment(buffTime.value).add(-searchInput.value.unit, "days").format("YYYY-MM-DD")
                }
                apexChartOptions.value.xaxis.categories = apexChartOptions.value.xaxis.categories.reverse()

            }



        })
        return {
            unitOptions,
            apexChartOptions,
            categoryOptions,
            category,
            unit

        }
    }

})