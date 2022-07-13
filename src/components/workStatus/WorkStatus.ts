import { useTasks } from "src/composition/useTasks"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, watch } from "vue"

export default defineComponent({

    setup() {
        const { readTask } = useTasks()
        const { user } = userInformation()
        let activeTask
        watch(() => user.value.profileId, async () => {
            activeTask = await readTask()
        })
        return {
            activeTask
        }
    }
})