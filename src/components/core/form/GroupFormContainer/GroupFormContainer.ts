import { QForm } from "quasar"
import FormField from "src/components/base/forms/FormField/FormField.vue"
import { computed, defineComponent, onMounted, ref, toRaw } from "vue"
import { Form } from ".."
import { ContainerData } from "../FormContainer/FormContainer"
import FormTitle from "./FormTitle/FormTitle.vue"

export type FormMakerInput = {
  title?: string;
  icon?: string;
  form: Form<any>;
}

export default defineComponent({
  components: {
    FormField,
    FormTitle,
  },
  props: {
    container: {
      type: Object as () => { loading: boolean },
      required: true
    },
    form: {
      type: Array as () => FormMakerInput[],
      default: () => ([])
    },
  },
  emits: ["submit"],

  setup(props, { emit }) {
    const qForm = ref<QForm>(null)
    const internalForm = computed(() => toRaw(props.form))

    onMounted(() => {
      internalForm.value.forEach(item => {
        item.form.setRef(qForm.value)
      })
    })

    function reset() {
      for (const formWrapper of props.form) {
        formWrapper.form.reset()
      }
    }

    async function submit() {
      for (const formWrapper of props.form) {
        const valid = await formWrapper.form.validate()
        if (!valid) return
      }
      emit("submit")
    }

    const containerConfig = computed((): ContainerData => {
      const newConfig = {
        ...props.container,
        class: {
          bodyClass: "p-2"
        }
      }
      return newConfig
    })

    return {
      qForm,
      containerConfig,
      internalForm,
      submit,
      reset
    }
  }

})
