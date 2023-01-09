
import CheckList from "@editorjs/checklist"
import CodeTool from "@editorjs/code"
import Delimiter from "@editorjs/delimiter"
import Embed from "@editorjs/embed"
import EditorHeader from "@editorjs/header"
import InlineCode from "@editorjs/inline-code"
import Marker from "@editorjs/marker"
import NestedList from "@editorjs/nested-list"
import Paragraph from "@editorjs/paragraph"
import Warning from "@editorjs/warning"
import DragDrop from "editorjs-drag-drop"
import EditorJS, { OutputBlockData, OutputData } from "lib/editorjs/core"
import Table from "lib/editorjs/table"
import { computed, defineComponent, onMounted, onUnmounted, PropType, ref, watch } from "vue"
import i18n from "./editor-config.json"

export default defineComponent({
	props: {
		modelValue: {
			default: null,
			type: Object as PropType<OutputData>
		},
		isEditable: {
			default: false,
			type: Boolean,
		},
	},
	emits: ["onChange", "update:isEditable", "onEmpty"],
	setup(props, { emit }) {
		const editorRef = ref<HTMLDivElement>()
		const isEmpty = ref(false)
		let editorJs: EditorJS = null

		const computedStyle = computed(() => {
			const isEditable = props.isEditable
			return {
				borderRadius: isEditable ? "5px" : "none",
				minHeight: isEditable ? "250px" : "0px",
			}
		})

		const computedClass = computed(() => {
			return {
				"input-border": props.isEditable
			}
		})

		const editorModeOptions = [
			{
				slot: "preview",
				value: "preview"
			},
			{
				slot: "edit",
				value: "edit"
			},
		]

		function createEditor() {

			editorJs = new EditorJS({
				logLevel: "ERROR" as any,
				readOnly: !props.isEditable,
				onReady() {
					new DragDrop(editorJs)

					watch(
						() => props.modelValue,
						async () => await render(),
						{ immediate: true })

					watch(
						() => props.isEditable,
						async (isEditable) => await setReadOnly(!isEditable))
				},
				onChange: async (api, _event) => {
					const content = await api.saver.save()
					updateIsEmpty(content.blocks)

					if (!editorJs.readOnly.isEnabled) {
						emit("onChange", content)
					}
				},
				i18n: i18n as any,
				holder: editorRef.value,
				tools: {
					paragraph: {
						class: Paragraph,
						config: {
							preserveBlank: true
						},
						inlineToolbar: true,
					},
					header: {
						class: EditorHeader,
						inlineToolbar: true,
					},
					list: {
						class: NestedList,
						inlineToolbar: true,
						config: {
							defaultStyle: "unordered"
						}
					},
					checklist: {
						class: CheckList,
						inlineToolbar: true
					},
					marker: {
						class: Marker,
						inlineToolbar: true
					},
					// image: SimpleImage as any,
					// image: {
					//   class: ImageTool,
					//   config: {
					//     endpoints: {
					//       byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
					//       byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
					//     },
					//   },
					// },
					table: {
						class: Table,
					},
					code: {
						class: CodeTool
					},
					warning: {
						class: Warning,
						inlineToolbar: true,
					},
					inlinecode: {
						class: InlineCode,
					},
					delimiter: Delimiter,
					embed: {
						class: Embed,
						inlineToolbar: true,
						config: {
							services: {
								youtube: true,
								aparat: true,
								codepen: {
									regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
									embedUrl: "https://codepen.io/<%= remote_id %>?height=400&theme-id=0&default-tab=css,result&embed-version=2",
									html: "<iframe height='400' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
									id: (groups) => groups.join("/embed/")
								},
							}
						}
					},
				},
			})

		}

		async function render() {
			const blocks = [...props.modelValue?.blocks || []]

			updateIsEmpty(blocks)

			await editorJs.render({ blocks })
		}


		function updateIsEmpty(blocks: OutputBlockData<string, any>[]) {
			if (!blocks.length || !blocks[0].data.text) {
				isEmpty.value = true
				emit("onEmpty", isEmpty.value)
			}
			else {
				isEmpty.value = false
				emit("onEmpty", isEmpty.value)
			}
		}

		async function getValue() {
			return await editorJs.save()
		}

		async function setReadOnly(readOnly: boolean) {
			await editorJs.readOnly.toggle(readOnly)
			emit("update:isEditable", !readOnly)
		}

		onMounted(() => {
			createEditor()
		})

		onUnmounted(() => {
			editorJs?.destroy()
		})

		return {
			getValue,
			computedClass,
			editorModeOptions,
			editorRef,
			computedStyle
		}

	}
})

