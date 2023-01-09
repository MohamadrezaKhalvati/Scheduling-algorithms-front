import { QFile } from "quasar"
import { defineComponent } from "vue"

export default defineComponent({
  components: { QFile },
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
  setup(_, { emit }) {
    function onInput(value) {
      emit("update:modelValue", value)
    }

    function clear() {
      onInput(null)
    }

    return {
      onInput,
      clear
    }
  }
})