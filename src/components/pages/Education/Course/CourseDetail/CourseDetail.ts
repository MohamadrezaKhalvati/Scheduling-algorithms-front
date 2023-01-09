import { useSize } from "src/boot/size"
import Title from "src/components/shared/Title/Title.vue"
import { computed, defineComponent } from "vue"

export default defineComponent({
	components: {
		Title
	},
	props: {
		contents: {
			type: Array as () => QuestionAnswerType[],
			required: true,
		},
		card: {
			type: Object as () => AboutCardType,
			required: true,
		},
		skeleton: {
			type: Boolean,
			default: true
		}
	},
	setup() {
		const { state: size } = useSize()
		const computedTextClass = computed(() => (
			{ "text-center": size.value.lg }
		))


		return {
			size,
			computedTextClass,
		}
	}
})

export type CourseDetailInput = {
	contents: QuestionAnswerType[];
	card: AboutCardType;
	skeleton: boolean;
}

export type QuestionAnswerType = {
	question: string;
	answer: string;
}

export type AboutCardType = {
	image: string;
	title: string;
	description: string;
	features: {
		label: string;
		value: string;
		icon: string;
	}[];
	status: string;
	link: string;
}
