
import moment from "jalali-moment"
import { TaskStatus } from "src/utils/default"
import { computed, defineComponent, PropType } from "vue"

export default defineComponent({
	props: {
		deadline: {
			type: String,
			required: true,
		},
		status: {
			type: String as PropType<TaskStatus>,
			required: true,
		}
	},
	setup(props) {
		const nowMoment = moment()

		const remainingDays = computed(() => {
			return Math.ceil(moment(props.deadline).diff(nowMoment, "day", true))
		})

		const formattedDeadline = computed(() => {
			return moment(props.deadline).format("jYYYY-jMM-jDD")
		})

		const isFinished = computed(() => props.status == TaskStatus.Done)

		const deadlineColor = computed(() => {
			let color = "green-8"

			if (isFinished.value)
				color = "grey"
			else if (remainingDays.value < 0)
				color = "red-10"
			else if (remainingDays.value == 0)
				color = "yellow-10"

			return color
		})

		return {
			formattedDeadline,
			remainingDays,
			isFinished,
			deadlineColor,
		}
	}
})

