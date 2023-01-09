
import { computed, defineComponent } from "vue"

export type BreadcrumbType = {
	label: string;
	icon: string;
	link: string;
}

export default defineComponent({
	components: {},
	props: {
		data: {
			type: Array as () => BreadcrumbType[],
			default: () => []
		}
	},
	setup(props) {
		const computedData = computed(
			() => props.data.map((item, index) => ({ ...item, isLast: index + 1 == props.data.length }))
		)

		return {
			computedData
		}
	}
})

