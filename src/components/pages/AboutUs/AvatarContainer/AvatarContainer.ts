import { AvatarInput } from "src/components/pages/AboutUs/Avatar/Avatar"
import Avatar from "src/components/pages/AboutUs/Avatar/Avatar.vue"
import Title from "src/components/shared/Title/Title.vue"
import { defineComponent } from "vue"

export default defineComponent({
	components: {
		Avatar,
		Title
	},
	props: {
		peopleList: {
			type: Array as () => AvatarInput[],
			required: true,
		}
	},
})
