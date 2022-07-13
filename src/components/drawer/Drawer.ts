import { useDrawer } from "src/composition/useDrawer"
import { defineComponent } from "vue"

export default defineComponent({


    setup() {
        const { changeMiniStateValue, miniState, drawer } = useDrawer()

        return {
            changeMiniStateValue,
            miniState,
            drawer
        }
    }

})

