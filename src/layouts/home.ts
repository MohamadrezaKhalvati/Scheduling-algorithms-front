import { useQuasar } from "quasar"
import FcfsAlgorithms from "src/components/fcfsAlgorithms/FcfsAlgorithms.vue"
import Header from "src/components/header/Header.vue"
import { defineComponent } from "vue"

export default defineComponent({
    components: {
        Header,
        FcfsAlgorithms,
    },
    setup() {
        const $q = useQuasar()
    },
})
