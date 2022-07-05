import Drawer from "src/components/drawer/Drawer.vue"
import Header from "src/components/header/Header.vue"
import WorkProgress from "src/components/workProgress/WorkProgress.vue"
import WorkStatus from "src/components/workStatus/WorkStatus.vue"
import { defineComponent } from "vue"
export default defineComponent({
    components: {
        Drawer,
        Header,
        WorkStatus,
        WorkProgress
    }
})