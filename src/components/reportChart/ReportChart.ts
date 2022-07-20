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
        const { getWorkHoursClassifiedReport } = readReport()
        const { user } = userInformation()

        const apexChartOptions = ref({
            series: [],
            chart: {
                id: "chartId",
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
                        position: "bottom",
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
            xaxis: {
                type: "time",
                categories: ["۱۳م تیر", "۱۴م تیر", "۱۵م تیر", "۱۶م تیر", "۱۷م تیر", "۱۸م تیر", "۱۹م تیر"],
                labels: {
                    style: {
                        colors: ["#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6"]
                    }
                },
                axisBorder: {
                    show: true,
                    color: "#d0d2d6"
                }
            },
            yaxis: {
                show: true,
                axisTicks: {
                    show: true,
                },
                labels: {
                    show: true,
                    type: "dateTime",
                    categories: ["۰ ساعت", "۲ ساعت", "۴ ساعت", "۶ ساعت", "۸ ساعت", "۱۰ ساعت"],
                    style: {
                        colors: ["#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6", "#d0d2d6"]
                    }
                },
                axisBorder: {
                    show: false,
                }
            },
        })
        const categoryOptions = [
            "دسته بندی", "پروژه"
        ]
        const dayOptions = [
            "۱",
            "۷",
            "۳۰"
        ]

        watch(() => user.value.userId, async () => {
            apexChartOptions.value.series = await getWorkHoursClassifiedReport()
            window["ApexCharts"].exec("chartId", "updateOptions", apexChartOptions.value)


        })
        return {
            dayOptions,
            apexChartOptions,
            categoryOptions,
            model: ref(null),
            dense: ref(false),
            denseOpts: ref(false),
        }
    }

})