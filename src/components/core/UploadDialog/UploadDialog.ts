
// import Plyr from "plyr";
import { defineComponent } from "vue";
import FormMaker from "src/components/core/form/FormMaker/FormMaker.vue";
import { useDialog, useForm } from "./_compotision";

export type UploadDialogInput = {
  url: string;
  // playerSettings?: Plyr.Options;
}

export default defineComponent({
  name: "UploadDialog",
  components: {
    FormMaker
  },
  props: {
    input: {
      type: Object as () => UploadDialogInput,
      required: true
    }
  },
  setup(props, ctx) {

    const uploadForm = useForm(props.input, ctx)
    const dialog = useDialog(props.input, ctx)

    return {
      uploadForm,
      ...dialog
    }
  }
})


