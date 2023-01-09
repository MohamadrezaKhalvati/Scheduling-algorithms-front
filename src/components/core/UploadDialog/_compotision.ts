import { QDialog } from "quasar"
import { Validators } from "src/utils/validator"
import { computed, onMounted, ref, Ref, SetupContext } from "vue"
import { Field, Form } from "src/components/core/form"
import { UploadDialogInput } from "./UploadDialog"

export function useForm(props: UploadDialogInput, ctx: SetupContext) {
  const option = computed(() => ({
    video: {
      component: Field.Slider as Field.Slider,
      icon: "description",
      url: props.url,
      class: "col-12",
      events: {
        uploaded: (ev) => ctx.emit("ok", ev)
      },
      rules: [Validators.required]
    }
  }))

  return {
    form: new Form(option.value),
    option
  }
}

export function useDialog(props: UploadDialogInput, ctx: SetupContext) {
  const dialogRef: Ref<QDialog> = ref(null)

  onMounted(() => {
    dialogRef.value = ctx.attrs.dialog as QDialog // ASK
  })

  const show = () => {
    dialogRef.value.show()
  }
  const hide = () => {
    dialogRef.value.hide()
  }

  return {
    dialogRef,
    show,
    hide
  }
}
