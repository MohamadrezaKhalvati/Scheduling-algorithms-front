import { QInput } from "quasar"
import { computed, defineComponent, ref } from "vue"

export default defineComponent({
  components: {
    QInput
  },
  props: {
    modelValue: {
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const qRef = ref<QInput>(null)
    const computedCicleStyle = computed(() => ({ backgroundColor: props.modelValue as string }))

    function onInput(value) {
      emit("update:modelValue", value)
    }

    return {
      onInput,
      qRef,
      computedCicleStyle,
    }
  }
})

