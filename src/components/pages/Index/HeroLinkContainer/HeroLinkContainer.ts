import Hero from "src/components/shared/Hero/Hero"
import { defineComponent } from "vue"
import SocialMedia from "src/../public/data/SocialMedia.json"

export type HeroLinkInput = {
	heroImage: string;
	heroContent: string;
}

export default defineComponent({
	components: {
		Hero
	},
	props: {
		heroImage: {
			type: String,
			default: ""
		},
		heroContent: {
			type: String,
			default: ""
		}
	},
	setup(props) {
		return {
			props,
			socialMediaLinks: Object.values(SocialMedia)
		}
	}
})
