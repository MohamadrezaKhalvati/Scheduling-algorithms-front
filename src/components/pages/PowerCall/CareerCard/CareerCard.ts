import CloudImage from "src/components/shared/CloudImage/CloudImage"
import Title from "src/components/shared/Title/Title"
import { defineComponent, ref } from "vue"


export type CareerCardType = {
	id: string;
	title: string;
	type: string;
	timeAccepting: string;
	place: string;
	description: string;
}

export default defineComponent({
	name: "CareerCard",
	components: {
		Title,
		CloudImage
	},
	props: {
		card: {
			type: Object as () => CareerCardType,
			required: true
		}
	},
	setup() {
		const expanded = ref(false)
		return {
			expanded
		}
	}
})
