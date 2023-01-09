
import { useSize } from "src/boot/size"
import { computed, defineComponent } from "vue"

export type CardType = {
	image: string
	title: string
	author: string
	authorImage: string
	duration: string
	description: string
	id: string
	link: string
	status: string
	durationIcon?: string
}

export default defineComponent({
	components: {},
	props: {
		card: {
			type: Object as () => CardType,
			required: true
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const { size } = useSize()
		const defaultImage = {
			image: "/images/education/pattern.jpg",
			avatar: "images/education/avatar.png"
		}

		const cardImage = computed(() => {
			return props.card.image || defaultImage.image
		})

		const cardAvatar = computed(() => {
			return props.card.authorImage || defaultImage.avatar
		})

		const description = computed(() => {
			const rawDescription = props.card.description.replace(/<img[^>]*>/g, "").replace(/<*p>/g, "")
			if (size.value.lg)
				return rawDescription.substring(0, 800) + "..."
			else
				return rawDescription.substring(0, 300) + "..."
		})

		return {
			props,
			cardImage,
			cardAvatar,
			description
		}
	}
})
