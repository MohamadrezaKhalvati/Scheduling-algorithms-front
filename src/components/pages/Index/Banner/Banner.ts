import Title from "src/components/shared/Title/Title"
import { computed, defineComponent } from "vue"

export type BannerType = {
	title: string;
	presenter: string;
	description: string;
	link: string;
}

export type BannerInput = {
	bannerData: BannerType;
	skeleton: boolean;
}

export default defineComponent({
	name: "Banner",
	components: {
		Title
	},
	props: {
		bannerData: {
			type: Object as () => BannerType,
			required: true
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const shortenedDescription = computed(() => {
			if (props.bannerData.description.length > 250)
				return props.bannerData.description.slice(0, 250) + "..."
			return props.bannerData.description
		})
		return {
			shortenedDescription
		}
	}
})
