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

        const { getReportWorkHours } = readReport()
        const { user } = userInformation()
        const chartLabelData = ref([])

        const chartOptions = ref({
            series: [{
                name: "series1",
                data: [2, 3, 4, 5]
            }],
            chart: {
                id: "workProgressId",
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: ["#5470c6"],
            stroke: {
                curve: "smooth",
                width: 3
            },
            grid: {
                show: false
            },
            xaxis: {
                categories: ["هفته اول", "هفته دوم", "هفته سوم", "هفته چهارم"],
                axisBorder: {
                    show: false
                },
                crosshairs: {
                    show: true,
                    position: "front",
                    stroke: {
                        color: "#b6b6b6",
                        width: 1,
                        dashArray: 1,
                    },
                },
                //  |-------|--------\----
                axisTicks: {
                    show: false,
                },
                // x row tip
                tooltip: {
                    enabled: false,
                    color: "red"
                },

                labels: {
                    show: false,
                },
            },
            tooltip: {
                followCursor: true,
                enabled: true,
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    const category = w.globals.categoryLabels[dataPointIndex]
                    const data = series[seriesIndex][dataPointIndex]


                    return "<div class=\"arrow_box\" style=\"width:190px; background-color: white; height: 50px; color: black; display: flex; justify-content: space-between; align-items: center;\">" +
                        "<div class=\"p-1\"  style=\"display:flex; align-items: center;\">" +
                        "<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\"> </span>" +
                        "<p style=\"padding: 5px;\">" + category + "</p>" +
                        "</div>" +
                        "<div class=\"p-1\"> <p style=\"padding: 5px;\">" +
                        data + "  ساعت" +
                        "</p> </div>" +
                        "</div>"
                },
            },
            yaxis: {
                show: false,
            },
            markers: {
                size: 1,
            },
        })


        function toHoursAndMinutes(totalMinutes) {
            const minutes = totalMinutes % 60
            const hours = Math.round(totalMinutes / 60)

            return `${hours}:${padTo2Digits(minutes)}`
        }

        function padTo2Digits(num) {
            return num.toString().padStart(2, "0")
        }

        watch(() => user.value.userId, async () => {
            const { returnReportData, chartLabelTimeData } = await getReportWorkHours()
            chartOptions.value.series[0].data = chartLabelTimeData

            window["ApexCharts"].exec("workProgressId", "updateOptions", chartOptions.value)


        })

        return {
            chartOptions
        }

    }




})



