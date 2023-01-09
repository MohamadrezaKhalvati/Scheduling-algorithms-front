
import { TinyColor } from "@ctrl/tinycolor"
import { useDarkMode } from "src/compositions/_unused/dark.composition"
import { computed, defineComponent } from "vue"

export default defineComponent({
	props: {
		color: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			default: ""
		},
	},
	setup(props) {
		const { isDarkMode } = useDarkMode()
		const computedStyle = computed(() => {
			const colorSet = new TinyColor(props.color).monochromatic(1)
			const textColor = colorSet[0].darken(35)
			const backgroundColor = colorSet[0].lighten(isDarkMode.value ? 15 : 20)
			return {
				borderColor: textColor,
				color: textColor,
				backgroundColor: backgroundColor
			}
		})

		return {
			computedStyle
		}
	}

})

