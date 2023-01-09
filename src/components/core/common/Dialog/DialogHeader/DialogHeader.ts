
import { QDialog } from "quasar"
import { defineComponent, PropType } from "vue"

export default defineComponent({
  props: {
    dialogRef: {
      required: true,
      type: Object as PropType<QDialog>
    },
  },
  setup(props) {
    //
  }
})

