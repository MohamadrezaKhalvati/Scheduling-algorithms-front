import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export type SFeatureType = {
	image: string;
	title: string;
	description: string;
}

export default defineComponent({
	name: "SFeatureContainer",
	components: {
		Title,
		CloudImage
	},
	props: {
		features: {
			type: Array as () => SFeatureType[],
			required: true
		},
	},
	setup(props) {
		return {
			props
		}
	}
})
