import { defineComponent } from "vue"
import VueApexCharts from "vue3-apexcharts"

export default defineComponent({
    el: "#app",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const options = {
            series: [72],
            chart: {
                height: 130,
                type: "radialBar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    hollow: {
                        margin: 0,
                        size: "67%",
                        background: "#282f46",
                        image: undefined,
                        imageOffsetY: 0,
                        imageOffsetX: 0,
                        position: "front",
                        dropShadow: {
                            enabled: false,
                        }
                    },
                    track: {
                        background: "#fff",
                        strokeWidth: "67%",
                        margin: 1, // margin is in pixels
                        dropShadow: {
                            enabled: false,
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            show: false,
                        },

                        value: {
                            formatter: function (val) {
                                return parseInt(val)
                            },
                            color: "#d0d2d6",
                            fontSize: "23px",
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["blue"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 30]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: ["%"],
        }

        return {
            options,
        }
    }
})