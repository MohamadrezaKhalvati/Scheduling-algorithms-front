import Title from "src/components/shared/Title/Title.vue"
import { PlyInput } from "src/components/shared/VideoPlayer/VideoPlayer"
import VideoPlayer from "src/components/shared/VideoPlayer/VideoPlayer.vue"
import { downloadFile } from "src/utils/util"
import { computed, ComputedRef, defineComponent, PropType } from "vue"

export type PresentationContentInput = {
	present: PresentationType;
	skeleton: boolean;
}

export type PresentationType = {
	title: string;
	presenter: string;
	downloadLink: string;
	playLink: string;
	slideLink: string;
	presentPoints: string;
	description: string;
	summary: string;
	date: string;
	thumbmnail?: string;
}

export default defineComponent({
	components: {
		VideoPlayer,
		Title
	},
	props: {
		present: {
			type: Object as PropType<PresentationType>,
			required: true,
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const downloadLinkNotEmbedLink = computed(() => {
			return !props.present.downloadLink.includes("style") && !props.present.downloadLink.includes("iframe")
		})

		const plyInput: ComputedRef<PlyInput> = computed(() => {
			return {
				src: props.present ? props.present.playLink : null,
				previewImage: props.present.thumbmnail
			}
		})
		return {
			plyInput,
			downloadLinkNotEmbedLink,
			downloadFile,
		}
	}
})
