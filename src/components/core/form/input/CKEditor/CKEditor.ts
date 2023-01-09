
import DocumentEditor from "src/lib/editorjs/ckeditor"
import { defineComponent, onMounted, watch } from "vue"
import { uploadAdapterPlugin } from "./upload-adaptor"

export default defineComponent({
	props: {
		modelValue: {
			required: true,
			type: String
		}
	},
	emits: ["update:modelValue"],
	setup(props, { emit }) {
		let editorRef = null


		function setModelValue(value = "") {
			editorRef.setData(value)
		}

		onMounted(() => {
			DocumentEditor
				.create(document.querySelector(".document-editor__editable"), {
					extraPlugins: [uploadAdapterPlugin],
					language: "fa",
					toolbar: {
						items: [
							"heading", "|",
							"alignment", "|",
							"fontfamily", "fontsize", "|",
							"fontColor", "fontBackgroundColor", "|",
							"link", "|",
							"bulletedList", "numberedList", "todoList", "|",
							"code", "codeBlock", "|",
							"insertTable", "|",
							"uploadImage", "|",
							"bold", "italic", "strikethrough", "underline", "subscript", "superscript", "|",
							"undo", "redo", "blockQuote",
							"outdent", "indent", "|",
						],
					},
					image: {
						toolbar: [
							"resizeImage:original", "|",
							"imageStyle:alignLeft", "imageStyle:block", "imageStyle:alignRight",
							"toggleImageCaption", "imageTextAlternative"
						],
					},
					codeBlock: {
						languages: [
							// Do not render the CSS class for the plain text code blocks.
							{ language: "plaintext", label: "Plain text", class: "" },

							// Use the "js" class for JavaScript code blocks.
							// Note that only the first ("js") class will determine the language of the block when loading data.
							{ language: "javascript", label: "JavaScript", class: "js javascript js-code" },

							// Python code blocks will have the default "language-python" CSS class.
							{ language: "python", label: "Python" }
						]
					},
					heading: {
						options: [
							{ model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
							{ model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
							{ model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
							{ model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
							{ model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
						]
					}
					// The configuration of the editor.
				})
				.then(editor => {
					editorRef = editor

					const toolbarContainer = document.querySelector(".document-editor__toolbar")
					toolbarContainer.appendChild(editor.ui.view.toolbar.element)

					editor.model.document.on("change:data", (newData) => {
						emit("update:modelValue", editor.getData())
					})

					watch(() => props.modelValue, (newModel: string, oldModel: string) => {
						if (newModel !== oldModel && newModel !== editor.getData()) {
							setModelValue(newModel)
						}
					}, { immediate: true, deep: true })

				})
				.catch(err => {
					console.error(err)
				})
		})

		return {}
	}
})
