import FormContainer from 'src/components/core/form/FormContainer/FormContainer.vue'
import { Validators } from 'src/utils/validator'
import { defineComponent } from 'vue'
import { Field, Form } from '../core/form'

export default defineComponent({
    components: {
        FormContainer,
    },

    setup() {
        const form = new Form({
            name: {
                component: Field.Text,
                icon: '',
                label: '',
                class: 'col-lg-6 col-12',
                rules: [Validators.required],
            },
        })
        return {
            form,
        }
    },
})
