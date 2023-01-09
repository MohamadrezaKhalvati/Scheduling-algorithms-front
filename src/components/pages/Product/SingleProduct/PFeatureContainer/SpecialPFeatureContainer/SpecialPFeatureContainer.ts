import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export type PFeatureSpecialType = {
	image: string;
	title: string;
	description: string;
}

export default defineComponent({
	components: {
		Title
	},
	props: {
		specialFeatures: {
			type: Array as () => PFeatureSpecialType[],
			required: true
		}
	},
	setup(props) {
		return {
			props
		}
	}
})
