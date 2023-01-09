import { computed, defineComponent, PropType, ref } from 'vue'

export default defineComponent({
    components: {},
    props: {
        modelValue: {
            default: '',
            type: [Object, String] as PropType<String>,
        },
        isEditable: {
            default: false,
            type: Boolean,
        },
    },
    setup(props) {
        const editor = ref<InstanceType<typeof Editor>>()

        const computedModelValue = computed(() => {
            let data: OutputData = null

            if (typeof props.modelValue === 'string') {
                try {
                    data = JSON.parse(props.modelValue)
                } catch {
                    data = convertStringToBlock(props.modelValue)
                }
            } else {
                data = props.modelValue as OutputData
            }

            return data
        })

        function convertStringToBlock(content = '') {
            const isContentEmpty = content.trim().length == 0
            const block = {
                id: 'ZKEtiCQKVG',
                type: 'paragraph',
                data: {
                    text: content,
                },
            }
            const output = {
                time: +new Date(),
                version: '2.23.1',
                blocks: isContentEmpty ? [] : [block],
            }
            return output
        }

        async function getValue(): Promise<OutputData> {
            return await editor.value.getValue()
        }

        async function getStringifiedDate() {
            const data = await getValue()
            return JSON.stringify(data)
        }

        return {
            getValue,
            getStringifiedDate,
            computedModelValue,
            editor,
        }
    },
})
