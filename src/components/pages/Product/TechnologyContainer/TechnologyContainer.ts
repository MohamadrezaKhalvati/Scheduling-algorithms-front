import { computed, defineComponent } from "vue"
import Title from "src/components/shared/Title/Title.vue"

export type TechType = {
	image: string;
	title: string;
}

export default defineComponent({
	components: {
		Title
	},
	props: {
		techs: {
			type: Array as () => TechType[],
			required: true
		},
		hideTitle: {
			type: Boolean,
			default: false
		},
		edgeHightWidth: {
			type: Number,
			default: 50
		}
	},
	setup(props) {
		const style = computed(() => {

			const output = {
				minHeight: props.edgeHightWidth + "px",
				minWidth: props.edgeHightWidth + "px",
				maxWidth: props.edgeHightWidth + "px",
				maxHeight: props.edgeHightWidth + "px",
			}

			return output
		})

		return {
			props,
			style
		}
	}
})
