import { defineComponent, watch } from "vue"

export type PaginationInput = {
	pageAmount: number
	pageSize: number
	currentPage: number
}

export default defineComponent({
	props: {
		input: {
			type: Object as () => PaginationInput,
			required: true
		}
	},
	emits: ["request"],
	setup(props, { emit }) {

		function onModelChange(v) {
			//emit to fetch
			emit("request", v)
			window.scrollTo(0, 0)
		}

		watch(() => props.input.currentPage, (v) => onModelChange(v))

		return {}
	}
})


