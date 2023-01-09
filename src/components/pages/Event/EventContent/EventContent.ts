import Title from "src/components/shared/Title/Title"
import VideoPlayer from "src/components/shared/VideoPlayer/VideoPlayer"
import { defineComponent } from "vue"

export type EventContentInput = {
	event: EventType;
	skeleton: boolean;
}

export type EventType = {
	title: string;
	presenter: string;
	presenterImage: string;
	description: string;
	date: string;
	image: string;
}

export default defineComponent({
	name: "EventContent",
	components: {
		VideoPlayer,
		Title
	},
	props: {
		event: {
			type: Object as () => EventType,
			required: true
		},
		skeleton: {
			type: Boolean,
			default: false
		}
	},
	setup() {
		return {}
	}
})
