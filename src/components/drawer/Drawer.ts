import { useDrawer } from "src/composition/useDrawer";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const { changeMiniStateValue, miniState, drawer } = useDrawer();
    const navigationLinks = ref<NavigationLinkType[]>([]);

    return {
      changeMiniStateValue,
      miniState,
      drawer,
    };
  },
});
