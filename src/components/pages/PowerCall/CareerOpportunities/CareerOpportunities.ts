import CareerCard from "src/components/pages/PowerCall/CareerCard/CareerCard.vue"
import { CareerCardType } from "src/components/pages/PowerCall/CareerCard/CareerCard"
import Title from "src/components/shared/Title/Title.vue"
import { computed, defineComponent, Ref, ref } from "vue"

export const CareerTabs = {
	all: "همه",
	management: "مدیریتی",
	programming: "برنامه نویسی",
	financial: "مالی",
	design: "طراحی",
	ai: "هوش مصنوعی",
	security: "امنیت"
} as const

export const CareerTime = {
	allTheTime: "تمام وقت",
	halfTime: "نیمه وقت"
} as const



export default defineComponent({
	components: {
		Title,
		CareerCard
	},
	props: {
		cards: {
			type: Array as () => CareerCardType[],
			required: true
		}
	},
	setup(props) {
		const tab: Ref<string> = ref(CareerTabs.all)

		const computedCards = computed(() => {
			if (tab.value == CareerTabs.all) return props.cards
			return props.cards.filter(item => item.type == tab.value)
		})

		return {
			tab,
			CareerTabs,
			computedCards
		}
	}
})
