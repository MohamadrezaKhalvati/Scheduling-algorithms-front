import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export type ServiceType = {
	image: string;
	title: string;
	link: string;
}

export default defineComponent({
	components: {
		Title,
		CloudImage
	},
	props: {
		services: {
			type: Array as () => ServiceType[],
			required: true
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
