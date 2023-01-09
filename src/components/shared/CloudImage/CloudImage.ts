import { computed, defineComponent, onBeforeUnmount, ref, Ref } from "vue"

export default defineComponent({
	props: {
		index: {
			type: Number,
			default: 0
		}
	},
	setup(props) {
		const clouds = ["/images/cloud.svg", "/images/mask-group-1.png"]
		const cloudClass: Ref<string> = ref("")

		const acceptedCloud = computed(() => {
			if (props.index < clouds.length)
				return clouds[props.index]
			return clouds[0]
		})

		function mouseMove() {
			if (cloudClass.value.length)
				cloudClass.value = ""
			else
				cloudClass.value = "transform"
		}

		// window.addEventListener("mousemove", mouseMove)

		onBeforeUnmount(() => {
			// window.removeEventListener("mousemove", mouseMove)
		})

		return {
			props,
			cloudClass,
			acceptedCloud,
			mouseMove
		}
	}
})
