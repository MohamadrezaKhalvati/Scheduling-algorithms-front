import { EChartsType, init } from "echarts"
import { useQuasar } from "quasar"
import { Form } from "src/components/base/forms"
import FormMaker from "src/components/base/forms/FormMaker/FormMaker.vue"
import Title from "src/components/shared/Title/Title.vue"
import { useWindow } from "src/compositions/window.composition"
import { useDarkMode } from "src/compositions/_unused/dark.composition"
import { defineComponent, onMounted, PropType, ref, watch } from "vue"

export default defineComponent({
	components: {
		Title,
		FormMaker
	},
	props: {
		chartData: {
			type: Array,
			required: true,
		},
		labels: {
			type: Array,
			required: true,
		},
		form: {
			type: Object as PropType<Form<any>>,
			default: () => ({})
		},
		hideNavigation: {
			type: Boolean,
			default: false
		},
		axisLabel: {
			default: null,
			type: Object as PropType<AxisLabelType>
		},
		loading: {
			default: false,
			type: Boolean
		}
	},
	emits: ["navigatePage", "submit"],
	setup(props, { emit }) {
		const { isDarkMode } = useDarkMode()

		const chart = useChart()
		const { width } = useWindow()

		onMounted(() => {
			chart.createChart()

			watch(() => props.chartData, () => {
				chart.setOption({ series: props.chartData }, { replaceMerge: "series" })
			}, { immediate: true })

			watch(() => props.labels, () => renderChart(), { immediate: true })

			watch(isDarkMode, () => renderChart())

			watch(width, () => { chart.resize() })

		})

		function renderChart() {
			const textColor = getCssVariable()

			chart.setOption({
				xAxis: [
					{
						type: "category",
						data: props.labels,
						axisLabel: {
							show: true,
							color: textColor
						}
					},
				],
				yAxis: [
					{
						type: "value",
						axisLabel: {
							show: true,
							color: textColor,
							formatter(value: number) {
								return `${value.toLocaleString()} ساعت`
							}
						}
					}
				],
			})
		}

		function navigatePage(step) {
			emit("navigatePage", step)
		}

		function submit() {
			emit("submit")
		}

		function getCssVariable() {
			const html = document.querySelector(":root body")

			return getComputedStyle(html)
				.getPropertyValue("--text-color")
		}

		return {
			reportChartRef: chart.reportChartRef,
			navigatePage,
			submit
		}
	}
})

function useChart() {
	const quasar = useQuasar()
	const reportChartRef = ref()
	let chart: EChartsType = null

	function createChart() {
		chart = init(reportChartRef.value)

		chart.setOption({
			textStyle: {
				fontFamily: "Vazir",
				color: "white"
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "shadow"
				},
				textStyle: {
					fontFamily: "Vazir",
				},
				extraCssText: "direction: ltr;"
			},
			legend: {
				textStyle: {
					color: quasar.dark.isActive ? "white" : "--text-color"
				},
			},
			grid: {
				containLabel: true,
				left: "0px",
				right: "0px",
				bottom: "0px",
				top: "50px",
			},
			xAxis: [
				{
					data: [],
					type: "category",
					axisLabel: {
						show: true,
					}
				}
			],
			yAxis: [
				{
					type: "value",
					axisLabel: {
						show: true,
					}
				}
			],
			series: []
		})
	}

	function setOption(option: any, options: any = null) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		chart.setOption(option, options)
	}

	function resize() {
		chart.resize()
	}

	return {
		reportChartRef,
		createChart,
		setOption,
		resize
	}
}


export type AxisLabelType = {
	x: string;
	y: string;
}
