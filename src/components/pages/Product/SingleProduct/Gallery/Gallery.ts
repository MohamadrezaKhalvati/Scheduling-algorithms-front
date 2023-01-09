import { useSize } from "src/boot/size"
import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import Title from "src/components/shared/Title/Title.vue"
import { customisedListBasedOnPageSize } from "src/utils/util"
import { computed, defineComponent, PropType, ref } from "vue"
import GalleryModal from "./GalleryModal.vue"
import { useQuasar } from "quasar"

export type GalleryInput = {
	src: string
}

export default defineComponent({
	components: {
		Title,
		CloudImage
	},
	props: {
		images: {
			type: Array as PropType<GalleryInput[]>,
			required: true
		},
		title: {
			type: String,
			default: ""
		}
	},
	setup(props) {
		const slide = ref(0)
		const { size } = useSize()
		const customImages = computed(() => {
			const innerArrayLength = size.value.lg ? 6 : (size.value.md ? 2 : 1)
			return customisedListBasedOnPageSize(props.images, innerArrayLength)
		})


		const $q = useQuasar()

		const showDialog = (image) => {
			$q.dialog({
				component: GalleryModal,
				componentProps: {
					text: image,
					// ...more..props...
				}
			})
		}
		return {
			slide,
			props,
			customImages,
			size,
			showDialog
		}
	}
})
