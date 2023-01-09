import { useDarkMode } from "src/compositions/core/dark.composition"
import { defineComponent } from "vue"

export default defineComponent({
	setup() {
		const { setDarkMode, isDarkMode } = useDarkMode()

		return {
			isDarkMode,
			setDarkMode
		}
	}
})
