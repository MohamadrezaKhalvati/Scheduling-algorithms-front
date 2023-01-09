import { defineComponent, ref, Ref } from "vue"

export type TagType = {
	title: string
}

export default defineComponent({
	components: {
	},
	props: {
		tags: {
			type: Array as () => TagType[],
			required: true
		},
	},
	emits: ["input"],
	setup(props, { emit }) {
		const active: Ref<number> = ref(null)

		function activate(index, tagTitle) {
			if (index == active.value) {
				active.value = null
				emit("input", null)
			}
			else {
				active.value = index
				emit("input", tagTitle)
			}
		}

		return {
			active,
			activate,
			props
		}
	}
})
