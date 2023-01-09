import Title from "src/components/shared/Title/Title.vue"
import VideoPlayer from "src/components/shared/VideoPlayer/VideoPlayer.vue"
import { PlyInput } from "src/components/shared/VideoPlayer/VideoPlayer"
import { downloadFile } from "src/utils/util"
import { defineComponent, Ref, ref } from "vue"

export type CourseSegmentInput = {
	courses: CourseType[];
	skeleton: boolean;
}

export type CourseType = {
	title: string;
	id: string;
	innerCourse: {
		title: string;
		time: string;
		downloadLink: string;
		playLink: string;
	}[];
}

export default defineComponent({
	components: {
		VideoPlayer,
		Title
	},
	props: {
		courses: {
			type: Array as () => CourseType[],
			default: () => []
		},
		skeleton: {
			type: Boolean,
			default: false,
		}
	},
	setup() {
		const plyInput: Ref<PlyInput> = ref({
			src: null,
			settings: {
				autoplay: true
			}
		})
		const playVid: Ref<boolean> = ref(false)

		function openVideo(cource: CourseType["innerCourse"][0]) {
			plyInput.value.src = cource.playLink
			playVid.value = true
		}

		return {
			plyInput,
			playVid,
			downloadFile,
			openVideo,
		}
	}
})
