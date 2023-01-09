import OrdinaryPFeatureContainer from "src/components/pages/Product/SingleProduct/PFeatureContainer/OrdinaryPFeatureContainer/OrdinaryPFeatureContainer.vue"
import { PFeatureOrdinaryType } from "src/components/pages/Product/SingleProduct/PFeatureContainer/OrdinaryPFeatureContainer/OrdinaryPFeatureContainer"
import SpecialPFeatureContainer from "src/components/pages/Product/SingleProduct/PFeatureContainer/SpecialPFeatureContainer/SpecialPFeatureContainer.vue"
import { PFeatureSpecialType } from "src/components/pages/Product/SingleProduct/PFeatureContainer/SpecialPFeatureContainer/SpecialPFeatureContainer"
import { defineComponent } from "vue"

export default defineComponent({
	components: {
		OrdinaryPFeatureContainer,
		SpecialPFeatureContainer
	},
	props: {
		specialFeatures: {
			type: Array as () => PFeatureSpecialType[],
			required: true
		},
		ordinaryFeatures: {
			type: Array as () => PFeatureOrdinaryType[],
			required: true
		},
	},
	setup(props) {
		return {
			props
		}
	}
})
