import { useSize } from "src/boot/size"
import TechnologyContainer from "src/components/pages/Product/TechnologyContainer/TechnologyContainer.vue"
import { TechType } from "src/components/pages/Product/TechnologyContainer/TechnologyContainer"
import { convertToURL } from "src/utils/util"
import { computed, defineComponent } from "vue"

export type ProductType = {
	title: string;
	image: string;
	description: string;
	service: string[];
	techs: TechType[];
	link: string;
};

export default defineComponent({
	name: "ProductCard",
	components: {
		TechnologyContainer
	},
	props: {
		product: {
			type: Object as () => ProductType,
			required: true
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const { size } = useSize()
		const description = computed(() => {
			if(!props.product.techs.length && size.value.md && size.value.lg) {
				return props.product.description.substring(0 , 300) + "..."
			}
			if (size.value.xs && !size.value.md){
				return props.product.description.substring(0, 200) + "..."
			}
			if(props.product.techs.length) {
				return props.product.description.substring(0 , 100) + "..."
			}
			return props.product.description.substring(0 , 350) + "..."
		}

		)

		const productLink = computed(() => {
			return `/product/${convertToURL(props.product.link)}`
		})

		return {
			props,
			description,
			productLink
		}
	}
})
