import { defineComponent } from "vue"
import VueApexCharts from "vue3-apexcharts"

export default defineComponent({

    el: "#app",
    components: {
        apexchart: VueApexCharts,
    },
    data: function () {
        return {

            series: [{
                name: "series1",
                data: [100, 0, 450, 25]
            }],
            chartOptions: {
                chart: {
                    height: 20,
                    type: "area",
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        tools: {
                            download: false
                        },
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    curve: "smooth",
                },
                xaxis: {
                    type: "category",
                    data: ["هفته اول", "هفته دوم", "هفته سوم", "هفته چهارم"],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false
                    },

                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                tooltip: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    shared: true,
                    followCursor: true,
                    intersect: false,
                    inverseOrder: false,
                    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                        return `
                        <div class="arrow-box">
                        <span></span>
                        </div>
                        `
                    },
                    fillSeriesColor: false,
                    theme: false,
                    style: {
                        fontSize: "15px",
                        fontFamily: "vazir"
                    },
                    onDatasetHover: {
                        highlightDataSeries: false,
                    },
                    x: {
                        show: true,
                        format: "dd MMM",
                        formatter: undefined,
                    },
                    y: {
                        formatter: undefined,
                        title: {
                            formatter: (seriesName) => seriesName,
                        },
                    },
                    z: {
                        formatter: undefined,
                        title: "Size: "
                    },
                    marker: {
                        show: true,
                    },
                    fixed: {
                        enabled: false,
                        position: "topRight",
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
                grid: {
                    show: false,
                },

            },


        }
    },



})