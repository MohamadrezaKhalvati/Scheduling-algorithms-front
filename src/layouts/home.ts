import { useQuasar } from "quasar"
import Header from "src/components/header/Header.vue"
import { defineComponent } from "vue"
export default defineComponent({
    components: {
        Header,
    },
    setup() {
        const $q = useQuasar()
    },
})
