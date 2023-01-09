import FormContainer from "src/components/core/form/FormContainer/FormContainer.vue"
import { Validators } from "src/utils/validator"
import { defineComponent, Ref, ref } from "vue"
import { Field, Form } from "../core/form"
import { ContainerData } from "../core/form/FormContainer/FormContainer"

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

        const form = new Form({
            processNames: {
                component: Field.Select,
                options: [],
                icon: "tag",
                label: "تگ",
                class: "col-md-6 col-12",
                rules: [Validators.required],
                useInput: true,
                useChips: true,
                multiple: true,
                inputDebounce: 0,
                events: {
                    "new-value": createValue,
                    filter: filterFn,
                },
            },
        })

        function createValue(val, done) {
            console.log({ createValue: val })
            if (val.length > 0) {
                if (!stringOptions.includes(val)) {
                    stringOptions.push(val)
                }
                done(val, "toggle")
            }
        }

        function filterFn(val, update) {
            console.log({ filterFn: val })
            update(() => {
                if (val === "") {
                    filterOptions.value = stringOptions
                } else {
                    const needle = val.toLowerCase()
                    filterOptions.value = stringOptions.filter(
                        v => v.toLowerCase().indexOf(needle) > -1,
                    )
                }
            })
        }

        return {
            form,
            container,
        }
    },
})
