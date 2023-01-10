import useFcfs from "src/composition/useFcfsAlgorithms"
import { Validators } from "src/utils/validator"
import { defineComponent, Ref, ref } from "vue"
import { Field, Form } from "../core/form"
import { ContainerData } from "../core/form/FormContainer/FormContainer"
import FormContainer from "../core/form/FormContainer/FormContainer.vue"

import { dataType } from "src/composition/useFcfsAlgorithms"
export default defineComponent({
    components: {
        FormContainer,
    },

    setup() {
        const { waitingTime, inputData, generateServiceTime } = useFcfs()
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
                icon: "schedule",
                label: "arrival time",
                class: "col-lg-6 col-12",
                rules: [Validators.required],
            },
            executeTime: {
                component: Field.Text,
                icon: "schedule",
                label: "execute time",
                class: "col-lg-6 col-12",
                rules: [Validators.required],
            },
        })

        function submit(e) {
            generateServiceTime()
        }

        function addAnotherValue(e) {
            const formVal = form.modelValue.value
            const inputDataValue: dataType = {
                processName: formVal.processName,
                arrivalTime: parseInt(formVal.arrivalTime),
                executeTime: parseInt(formVal.executeTime),
            }
            inputData.value.push(inputDataValue)
            formVal.arrivalTime = 0
            formVal.executeTime = 0
            formVal.processName = "enter another one"
        }
        return {
            form,
            container,
            submit,
            addAnotherValue,
        }
    },
})
