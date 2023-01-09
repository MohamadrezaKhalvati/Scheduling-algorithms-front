import { go } from "fuzzysort"
import { QSelect as QuasarSelect } from "quasar"
import { computed, defineComponent, PropType, ref, watch } from "vue"
import { Type } from "../../index"


export default defineComponent({
  components: {
    QuasarSelect
  },
  props: {
    options: {
      type: Array as PropType<Array<Type.SelectItem>>,
      default: () => []
    },
    highlightClass: {
      type: String,
      default: ""
    },
    limitCount: {
      type: Number,
      default: 50
    },
    isAutoComplete: {
      type: Boolean,
      default: true,
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
  setup(props, { emit, attrs }) {
    const filteredOptions = ref<Type.SelectItem[]>([])

    function onOptionListChange(newVal) {
      filteredOptions.value = newVal
    }

    function onInput(value) {
      emit("update:modelValue", value)
    }

    function onFilter(val, update, abort) {
      const options: Type.SelectItem[] = props.options as any[]
      if (!options) return abort()
      update(
        () => {
          if (val === "")
            filteredOptions.value = options
          else {
            filteredOptions.value = go(val, options, {
              key: "label",
              allowTypo: true,
              limit: props.limitCount
            })
              .map((item) => ({
                value: item.obj.value,
                label: item.obj.label
              }))
          }
        },
        (ref: QuasarSelect) => {
          if (val !== "" && ref.options.length > 0) {
            ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
            ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
          }
        }
      )
    }

    const attributes = computed(() => {
      const result: any = { ...attrs }
      if (props.isAutoComplete) {
        result.useInput = true
        result.fillInput = true
        if (!attrs.multiple)
          result.hideSelected = true
        result.inputDebounce = 0
      }
      return result
    })


    watch(() => props.options, onOptionListChange, { immediate: true, })

    return {
      attributes,
      filteredOptions,
      onInput,
      onFilter,
    }
  }
})

