import { useUser } from "src/compositions/core/user.composition"
import { defineComponent, ref, watch, } from "vue"
import { QFile } from "quasar"

export default defineComponent({

  components: { QFile },


  props: {
    label: String,
    modelValue: {
      required: true,
    },
    events: {
      required: false,
      default: () => ({})
    }
  },
  setup(_, { emit }) {


    const { imageSrc, imageUrlFile } = useUser()
    const file = ref(null)

    function onInput(value) {
      emit("update:modelValue", value)
      file.value = value
    }

    watch(() => file.value, () => {
      imageUrlFile.value = file.value
      imageSrc.value = URL.createObjectURL(file.value)
    })


    return {
      file,
      imageSrc,
      onInput,


    }
  }
})
