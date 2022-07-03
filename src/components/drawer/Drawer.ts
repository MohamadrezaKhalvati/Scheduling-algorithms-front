import { defineComponent, ref } from "vue"

export default defineComponent({


    setup() {
        const miniState = ref(false)

        return {
            drawer: ref(false),
            miniState,

            drawerClick(e) {
                // if in "mini" state and user
                // click on drawer, we switch it to "normal" mode
                if (miniState.value) {
                    miniState.value = false

                    // notice we have registered an event with capture flag;
                    // we need to stop further propagation as this click is
                    // intended for switching drawer to "normal" mode only
                    e.stopPropagation()
                }
            }
        }
    }
})

