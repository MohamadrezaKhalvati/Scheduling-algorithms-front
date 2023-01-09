import { useSize } from "src/boot/size"
import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import Title from "src/components/shared/Title/Title.vue"
import { customisedListBasedOnPageSize } from "src/utils/util"
import { computed, defineComponent, ref } from "vue"

export type ProductType = {
	title: string;
	id: string;
	image: string;
	category: string;
	link: string;
}

export default defineComponent({
	components: {
		Title,
		CloudImage
	},
	props: {
		products: {
			type: Array as () => ProductType[],
			required: true
		},
	},
	setup(props) {
		
		const slide = ref(0)
		const { size } = useSize()
		
		const customProjects = computed(() => {
			const innerArrayLength = size.value.lg ? 3 : 1
			return customisedListBasedOnPageSize(props.products, innerArrayLength)
		})

		return {
			slide,
			customProjects,
			props,
			size
		}
	}
})
