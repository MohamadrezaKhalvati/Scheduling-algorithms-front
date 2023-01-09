
import moment, { isMoment, Moment } from "jalali-moment"
import { QDate, QPopupProxy } from "quasar"
import { formatDate } from "src/utils/util"
import { computed, defineComponent, ref } from "vue"


export default defineComponent({
  components: {
    QDate
  },
  props: {
    modelValue: {
      required: true,
    },
    events: {
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const qDateProxy = ref<QPopupProxy>(null)
    const locale = attrs.calendar == "gregorian" ? "en" : "fa"

    const internalModel = computed(() => {
      const value = props.modelValue as any
      if (isMoment(value))
        return value.format("YYYY/MM/DD")

      if (moment.isDate(value) || (new Date(value))?.getTime() > 0)
        return formatDate(value).format("YYYY/MM/DD")

      return value
    })

    function onInput(value: string | Moment) {
      let output: Moment | string = null
      let shouldEmit = true
      if (value) {
        if (isMoment(value))
          output = value
        else {
          const hasEnoughDigits = /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/g.test(value)
          if (hasEnoughDigits) {
            const candidateMoment = moment.from(value, locale, "YYYY/MM/DD").locale(locale)
            output = candidateMoment
          }
          else
            shouldEmit = false
        }
      }

      if (shouldEmit)
        emit("update:modelValue", output)

      qDateProxy.value.hide()
    }

    function clear() {
      emit("update:modelValue", null)
    }

    return {
      qDateProxy,
      internalModel,
      onInput,
      clear
    }
  }
})
