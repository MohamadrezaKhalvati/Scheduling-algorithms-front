import { useDrawer } from "src/composition/useDrawer";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { changeDrawerValue } = useDrawer();
    return {
      changeDrawerValue,
    };
  },
});
