import { ref } from "vue"

const miniState = ref(false)
const drawer = ref(false)

function changeMiniStateValue(e) {
    if (miniState.value) {
        miniState.value = false
        e.stopPropagation()
    }
}

function changeDrawerValue(e) {
    drawer.value = !drawer.value
}

export function useDrawer() {
    return {
        changeMiniStateValue,
        changeDrawerValue,
        miniState,
        drawer
    }
}