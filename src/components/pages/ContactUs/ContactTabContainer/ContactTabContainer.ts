import { Form } from "src/components/base/forms"
import FormContainer from "src/components/base/forms/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/base/forms/FormContainer/FormContainer"
import ContactForm from "src/components/pages/ContactUs/ContactForm/ContactForm.vue"
import PhoneContact from "src/components/pages/ContactUs/ContactPhone/ContactPhone.vue"
import { defineComponent, Ref, ref } from "vue"

export default defineComponent({
	components: {
		FormContainer,
		PhoneContact,
		ContactForm
	},
	props: {
		form: {
			type: Object as () => Form<any>,
			required: true,
		},
		container: {
			type: Object as () => ContainerData,
			required: true,
		}
	},
	setup() {
		const activeItemIndex: Ref<number> = ref(0)

		const imageData = [
			{
				image: "/images/contact/open-email.png",
				title: "مکاتبه ای"
			},
			{
				image: "/images/contact/phone.png",
				title: "تلفنی"
			},
		]

		function changeContent(index: number) {
			activeItemIndex.value = index
		}

		return {
			activeItemIndex,
			changeContent,
			imageData,
		}
	}
})
