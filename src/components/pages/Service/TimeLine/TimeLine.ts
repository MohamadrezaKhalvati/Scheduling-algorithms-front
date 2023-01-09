import Title from "src/components/shared/Title/Title.vue"
import { computed, defineComponent } from "vue"
import TimeLine from "src/data/TimeLine.json"
import { useSize } from "src/boot/size"

export default defineComponent({
	name: "TimeLine",
	components: {
		Title
	},
	props: {},
	setup(props) {
		const { size: size } = useSize()

		const content = {
			title: "مسیر ارائه خدمت",
			description: "مسیری که ماهان می پیماید تا شما را به آنچه می خواهید، برساند."
		}
		const colors = [
			"red-14",
			"orange-14",
			"yellow-14",
			"green-14",
			"green-8",
			"teal-8",
			"blue-8",
			"green-6",
			"green-4",
			"yellow-8",
			"orange-14",
			"red-8"]

		const layout = computed(() => {
			return !size.value.md ? "dense" : "loose"
		})

		const times = TimeLine.map((item, index) => ({
			...item,
			class: index % 2 == 0 ? "container--timeline--float" : "container--timeline",
			side: index % 2 == 0 ? "left" : "right",
			color: colors[index]
		}))

		return {
			props,
			times,
			content,
			layout
		}
	}
})
