import { useSize } from "src/boot/size"
import { computed, defineComponent, onMounted, ref, Ref } from "vue"
import deepMerge from "deepmerge"
import Plyr from "plyr"
export type PlyInput = {
	src: string
	settings?: Plyr.Options
	previewImage?: string
}

const defaultInput = {
	controls: [
		"play-large",
		"play",
		"progress",
		"current-time",
		"mute",
		"volume",
		"settings",
		"fullscreen",
		"playbackRates"
	],
	speed: {
		selected: 1,
		options: [0.75, 1, 1.25, 1.5, 2]
	}
}

export default defineComponent({
	props: {
		src: {
			type: String,
			default: ""
		},
		previewImage: {
			type: String,
			default: ""
		},
		settings: {
			type:
				Object as () => Plyr.Options,
			required: true
		}
	},

	setup(props) {
		let player: Ref<Plyr> = ref(null)
		const videoElement: Ref<HTMLVideoElement> = ref(null)

		const mergedInput = computed(() => deepMerge(props.settings, defaultInput))
		const { size} = useSize()

		onMounted(() => {
			player = ref(new Plyr(videoElement.value, mergedInput.value))
		})

		const isVideo = computed(() => {
			console.log(props.src)
			return !props.src.includes("style") &&
				!props.src.includes("iframe")
		})

		const computedSrc = computed(() => {
			props.src.replace(/height:100%;/g, "")
			if (size.value.lg)
				return props.src.replace(/height:100%;/g, "height:100%; max-height:500px;")
			if (size.value.md)
				return props.src.replace(/height:100%;/g, "height:100%; max-height:350px;")
			return props.src.replace(/height:100%;/g, "height:100%; max-height:200px;")
		})

		return {
			computedSrc,
			videoElement,
			isVideo,
			player
		}
	}
})
