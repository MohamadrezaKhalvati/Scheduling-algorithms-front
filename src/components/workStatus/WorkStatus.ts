import { useReport, WorkStatusDataType } from "src/composition/useReport"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, ref, watch } from "vue"
export default defineComponent({

    setup() {
        const { getWorkStatusData } = useReport()
        const { user } = userInformation()
        const workStatusData = ref<WorkStatusDataType>({
            activeTasksCount: 0,
            monthly: "0",
            weekly: "0"
        })
        watch(() => user.value.profileId, async () => {
            workStatusData.value = await getWorkStatusData()
        })
        return {
            workStatusData
        }
    }
})