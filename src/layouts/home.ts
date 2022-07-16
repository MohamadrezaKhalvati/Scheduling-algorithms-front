import { useQuasar } from "quasar"
import ActiveTasksTable from "src/components/activeTasksTable/ActiveTasksTable.vue"
import DailyWorkReport from "src/components/dailyWorkReport/DailyWorkReport.vue"
import Drawer from "src/components/drawer/Drawer.vue"
import Header from "src/components/header/Header.vue"
import OkrProgress from "src/components/okrProgress/OkrProgress.vue"
import ReportChart from "src/components/reportChart/ReportChart.vue"
import WorkProgress from "src/components/workProgress/WorkProgress.vue"
import WorkStatus from "src/components/workStatus/WorkStatus.vue"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent } from "vue"
export default defineComponent({
    components: {
        Drawer,
        Header,
        WorkStatus,
        WorkProgress,
        OkrProgress,
        ActiveTasksTable,
        ReportChart,
        DailyWorkReport
    },
    setup() {
        const $q = useQuasar()
        $q.dark.set(true)

        const { setUserJwt, getUserData } = userInformation()

        setUserJwt()
        getUserData()

    }
})