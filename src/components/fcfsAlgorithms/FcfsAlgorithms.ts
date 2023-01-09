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
        const stringOptions = []
        const filterOptions = ref()

        const container: Ref<ContainerData> = ref({
            title: "Fcfs algorithm input",
            loading: false,
        })

        // const form = new Form({
        //     processNames: {
        //         component: Field.Select,
        //         options: [],
        //         icon: "tag",
        //         label: "process name",
        //         class: "col-md-6 col-12",
        //         rules: [Validators.required],
        //         useInput: true,
        //         useChips: true,
        //         multiple: true,
        //         inputDebounce: 0,
        //         events: {
        //             "new-value": createValue,
        //             filter: filterFn,
        //         },
        //     },
        // })

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

        return {
            form,
            container,
            submit,
        }
    },
})
