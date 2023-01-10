import useFcfs from "src/composition/useFcfsAlgorithms"
import { defineComponent, ref, Ref } from "vue"
import TableContainer, {
    TableConfig,
} from "../core/table/TableContainer/TableContainer.vue"
import TableTitle from "../shared/TableTitle/TableTitle.vue"
export default defineComponent({
    components: {
        TableTitle,
        TableContainer,
    },
    setup() {
        const { processNameData } = useFcfs()

        const container: Ref<any> = ref({
            title: "Fcfs algorithm results",
        })
        const table = ref<TableConfig<any>>({
            loading: false,
            rows: [],
            selection: "single",
            indexer: true,
            pagination: {
                page: 1,
                rowsPerPage: 5,
                rowsNumber: 0,
            },
            rowsPerPageOptions: [],
            columns: [
                {
                    key: "processName",
                    label: "process name",
                },
                {
                    key: "waitingTime",
                    label: "waiting time",
                },
                {
                    key: "responseTime",
                    label: "response time",
                },
                {
                    key: "AverageWaitingTime",
                    label: " average waiting time",
                },
                {
                    key: "AverageTurnAroundTime",
                    label: "average turn around time",
                },
            ],
        })
        return {
            table,
            container,
        }
    },
})
