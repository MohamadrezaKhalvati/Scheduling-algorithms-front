import { defineComponent } from "vue"
import Contacts from "public/data/PhoneContact.json"

export default defineComponent({
	setup() {
		const contactPhone = Contacts

		return {
			contactPhone
		}
	}
})
