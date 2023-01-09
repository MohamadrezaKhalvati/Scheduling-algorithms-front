import { useDrawer } from "src/composition/useDrawer";
import { defineComponent, ref } from "vue";

type NavigationLinkType = {
  label: string;
  icon: string;
  link: string;
};

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
