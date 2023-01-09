import { QForm } from "quasar"
import FormField from "src/components/base/forms/FormField/FormField.vue"
import { computed, defineComponent, onMounted, PropType, ref } from "vue"
import { Form } from ".."
import { ContainerData } from "../FormContainer/FormContainer"
import FormTitle from "../GroupFormContainer/FormTitle/FormTitle.vue"

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
    form: {
      type: Array as PropType<FormMakerInput[]>,
      default: () => []
    },
    container: {
      type: Object as () => ContainerData,
      default: () => ({})
    }
  },
  emits: ["submit"],
  setup(props, { emit }) {
    const qForm = ref<QForm>(null)

    onMounted(() => {
      props.form.forEach(item => {
        item.form.setRef(qForm.value)
      })
    })

    function reset() {
      for (const formWrapper of props.form) {
        formWrapper.form.reset()
      }
    }

    async function isValid() {
      let isValid = true
      for (const formWrapper of props.form) {
        isValid = await formWrapper.form.validate() && isValid
        if (!isValid) break
      }

      return isValid
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

    function submit(ev) {
      ev.preventDefault()
      emit("submit")
    }

    return {
      qForm,
      containerConfig,
      isValid,
      reset,
      submit
    }
  }

})
