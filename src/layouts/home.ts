import { useQuasar } from "quasar"
import FcfsAlgorithms from "src/components/fcfsAlgorithms/FcfsAlgorithms.vue"
import Header from "src/components/header/Header.vue"
import outputData from "src/components/outputData/outputData.vue"
import { defineComponent } from "vue"
export default defineComponent({
    components: {
        Header,
        FcfsAlgorithms,
        outputData,
    },
    setup() {
        const $q = useQuasar()
    },
})
