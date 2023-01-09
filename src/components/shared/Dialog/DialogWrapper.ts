

import { QDialog } from "quasar"
import { useSize } from "src/boot/size"
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
	props: {
		dialogRef: {
			required: true
		}
	},
	emits: ["update:dialogRef"],
	setup(_, { emit }) {
		const dialog = ref<QDialog>()
		const size = useSize()

		function onHide() {
			dialog.value.hide()
		}

		onMounted(() => {
			emit("update:dialogRef", dialog.value)
		})

		return {
			size,
			dialog,
			onHide
		}
	}
})

