
import { QSlider } from "quasar"
import { computed, defineComponent } from "vue"

export default defineComponent({
  components: { QSlider },
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
  setup(_, { emit, attrs }) {
    function onInput(value) {
      emit("update:modelValue", value)
    }

    const fieldInput = computed(() => {
      const attributes = { stackLabel: true, ...attrs }
      delete attributes["label"]
      return attributes
    })

    function clear() {
      onInput(false)
    }
    return {
      fieldInput,
      onInput,
      clear,
    }
  }

})

