import type { EChartsOption } from "echarts"
import { init } from "echarts"
import ResizeObserver from "resize-observer-polyfill"
import { defineComponent, onMounted, PropType, ref, watch } from "vue"

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<EChartsOption>,
      required: true,
    },
    theme: {
      type: String,
      default: "default"
    },
    groupId: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false,
    },
    initCfg: {
      type: Object as PropType<Parameters<typeof init>[2]>,
      default: null,
    },
    shouldRender: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, { emit, attrs }) {
    const elementRef = ref<HTMLDivElement>()
    let resizing = false
    let chart: EchartsInstance = null
    let observer: ResizeObserver

    function refreshOption() {
      if (!chart || !props.shouldRender) return

      if (props.options && !!Object.keys(props.options).length) {
        chart.setOption(props.options, true)
        if (elementRef.value.clientHeight)
          chart.resize()
      }
    }

    function refreshChart() {
      if (chart) {
        chart.dispose()
        chart = null
      }

      chart = init(elementRef.value, props.theme, props.initCfg)
      chart.group = props.groupId

      refreshOption()
    }

    function createObservable() {
      observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const entry = entries[0]
        if (entry.contentRect.width && entry.contentRect.height && chart && !resizing) {
          resizing = true
          requestAnimationFrame(() => {
            if (chart) chart.resize(entry.contentRect)
            resizing = false
          })
        }
      })
    }

    function setOption(...args: Parameters<EchartsInstance["setOption"]>) {
      return chart.setOption(...args)
    }

    function dispatchAction(...args: Parameters<EchartsInstance["dispatchAction"]>) {
      return chart.dispatchAction(...args)
    }

    onMounted(() => {
      refreshChart()
      if (!observer) {
        createObservable()
      }

      observer.observe(elementRef.value)
    })

    watch(() => props.options, () => refreshOption(), { deep: true })

    return {
      elementRef,
      refreshOption,
      setOption,
      dispatchAction
    }

  }
})


type EchartsInstance = ReturnType<typeof init>;
