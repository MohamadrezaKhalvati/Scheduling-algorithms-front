import Title from "src/components/shared/Title/Title.vue"
import { computed, defineComponent } from "vue"

export type PFeatureOrdinaryType = {
	title: string;
}

export default defineComponent({
	name: "OrdinaryPFeatureContainer",
	components: {
		Title
	},
	props: {
		ordinaryFeatures: {
			type: Array as () => PFeatureOrdinaryType[],
			required: true
		},
	},
	setup(props) {
		const rightFeatureList = computed(() =>
			props.ordinaryFeatures
				.filter((_, index) => index % 2 == 0)
				.map((item, index) => ({ ...item, index: index }))
		)
		const leftFeatureList = computed(() =>
			props.ordinaryFeatures
				.filter((_, index) => index % 2 == 1)
				.map((item, index) => ({ ...item, index: index + Math.round(props.ordinaryFeatures.length / 2) }))
		)

		return {
			leftFeatureList,
			rightFeatureList
		}
	}
})
