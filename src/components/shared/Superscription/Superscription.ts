import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export default defineComponent({
	components: {
		Title,
		CloudImage
	},
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
