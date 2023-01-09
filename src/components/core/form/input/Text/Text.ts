import { QInput } from "quasar"
import { defineComponent, ref } from "vue"

export default defineComponent({
  components: {
    QInput
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
  setup(_, { emit }) {
    const qRef = ref<QInput>(null)

    function onInput(value) {
      emit("update:modelValue", value)
    }

    return {
      onInput,
      qRef
    }
  }
})

