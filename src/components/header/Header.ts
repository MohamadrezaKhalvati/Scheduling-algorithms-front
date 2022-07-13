import { useDrawer } from "src/composition/useDrawer"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent } from "vue"

export default defineComponent({
    setup() {
        const { changeDrawerValue } = useDrawer()
        const { user } = userInformation()
        return {
            changeDrawerValue,
            user
        }
    }

})