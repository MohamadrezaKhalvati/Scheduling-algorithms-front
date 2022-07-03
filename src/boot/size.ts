
import { Platform } from "quasar"
import { ref } from "vue"

function useBreakpointsInternal() {
  const resizeTimeout = 100
  const thresholds = {
    xl: 1200,
    lg: 992,
    md: 600,
    sm: 576,
    xs: 0,
  }

  const state = ref({
    xl: true,
    lg: false,
    md: false,
    sm: false,
    xs: false,
    height: 0,
    width: 0,
    isHorizental: false
  })


  function init() {
    /* istanbul ignore if */
    if (typeof window === "undefined") { return }

    window.addEventListener(
      "resize",
      onResize,
      { passive: true }
    )

    update()
  }

  function onResize() {
    clearTimeout(resizeTimeout)
    setTimeout(update, 200)
  }

  /* eslint-disable-next-line max-statements */
  function update() {
    const height = getClientHeight()
    const width = getClientWidth()

    const xs = width >= thresholds.xs
    const sm = width >= thresholds.sm && xs
    const md = width >= thresholds.md && sm && xs
    const lg = width >= thresholds.lg && md && sm && xs
    const xl = width >= thresholds.xl && lg && md && sm && xs
    const isHorizental = Platform.is.mobile && width > height

    state.value = {
      height,
      width,
      lg,
      md,
      sm,
      xl,
      xs,
      isHorizental,
    }
  }

  // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081
  function getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === "undefined") { return 0 } // SSR
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
  }

  function getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === "undefined") { return 0 } // SSR
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
  }

  init()


  return {
    state,
  }
}

const state = useBreakpointsInternal()

export function useSize() {
  return state
}
