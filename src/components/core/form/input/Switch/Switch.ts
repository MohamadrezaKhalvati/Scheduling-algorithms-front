
import { QCheckbox, QRadio, QToggle } from "quasar"
import { computed, defineComponent } from "vue"


export default defineComponent({
  components: {
    QRadio,
    QCheckbox,
    QToggle,
  },
  props: {
    type: {
      type: String,
      default: "QCheckbox"
    },
    modelValue: {
      required: true,
    },
    events: {
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(_, { emit, attrs }) {

    function onInput(value) {
      emit("update:modelValue", value)
    }

    const componentInput = computed(() => {
      const newAtts = { ...attrs }
      newAtts.color = newAtts.checkboxColor
      delete newAtts.label
      delete newAtts.class
      return newAtts
    })

    function clear() {
      onInput(false)
    }

    return {
      componentInput,
      clear,
      onInput,
    }
  }
})

