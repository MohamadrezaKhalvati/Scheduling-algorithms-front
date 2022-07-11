import { useQuasar } from "quasar"
import ActiveTasksTable from "src/components/activeTasksTable/ActiveTasksTable.vue"
import DailyWorkActivity from "src/components/dailyWorkActivity/DailyWorkActivity.vue"
import Drawer from "src/components/drawer/Drawer.vue"
import Header from "src/components/header/Header.vue"
import OkrProgress from "src/components/okrProgress/OkrProgress.vue"
import ReportChart from "src/components/reportChart/ReportChart.vue"
import WorkProgress from "src/components/workProgress/WorkProgress.vue"
import WorkStatus from "src/components/workStatus/WorkStatus.vue"
import { defineComponent } from "vue"
export default defineComponent({
    components: {
        Drawer,
        Header,
        WorkStatus,
        WorkProgress,
        OkrProgress,
        ActiveTasksTable,
        DailyWorkActivity,
        ReportChart
    },
    setup() {
        const $q = useQuasar()
        $q.dark.set(true)

    }
})