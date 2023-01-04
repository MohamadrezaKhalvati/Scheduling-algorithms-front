import { useQuasar } from "quasar";
import Drawer from "src/components/drawer/Drawer.vue";
import Header from "src/components/header/Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Drawer,
    Header,
  },
  setup() {
    const $q = useQuasar();
  },
});
