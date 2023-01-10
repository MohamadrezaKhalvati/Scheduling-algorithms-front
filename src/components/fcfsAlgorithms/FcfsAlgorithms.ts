import { Validators } from "src/utils/validator"
import { defineComponent, Ref, ref } from "vue"
import { Field, Form } from "../core/form"
import { ContainerData } from "../core/form/FormContainer/FormContainer"
import FormContainer from "../core/form/FormContainer/FormContainer.vue"
export default defineComponent({
    components: {
        FormContainer,
    },

    setup() {
        const arrivatlTimeData = ref([])
        const burstTimeData = ref([])
        const processNameData = ref([])

        const container: Ref<ContainerData> = ref({
            title: "Fcfs algorithm input",
            loading: false,
        })

        const form = new Form({
            processName: {
                component: Field.Text,
                icon: "memory",
                label: "process name",
                class: "col-lg-6 col-12",
                rules: [Validators.required],
            },
            arrivalTime: {
                component: Field.Text,
                icon: "flight_land",
                label: "arrival time",
                class: "col-lg-6 col-12",
                rules: [Validators.required],
            },
            burstTime: {
                component: Field.Text,
                icon: "schedule",
                label: "burst Time",
                class: "col-lg-6 col-12",
                rules: [Validators.required],
            },
        })

        function submit() {
            console.log("submit clicked")
        }

        function addAnotherValue() {
            const formVal = form.modelValue.value
            arrivatlTimeData.value.push(parseInt(formVal.arrivalTime))
            processNameData.value.push(formVal.processName)
            burstTimeData.value.push(parseInt(formVal.burstTime))
            console.log(arrivatlTimeData.value)
            console.log(burstTimeData.value)
            console.log(processNameData.value)
        }
        return {
            form,
            container,
            submit,
            addAnotherValue,
        }
    },
})
