import { QFile } from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    components: { QFile },

    props: {
        label: String,
        modelValue: {
            required: true,
        },
        events: {
            required: false,
            default: () => ({}),
        },
    },
    setup(_, { emit }) {
        const file = ref(null)

        function onInput(value) {
            emit('update:modelValue', value)
            file.value = value
        }

        return {
            file,
            onInput,
        }
    },
})
