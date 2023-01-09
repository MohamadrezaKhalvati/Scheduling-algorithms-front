
import { useQuasar } from "quasar"
import FooterLink from "src/components/layouts/Base/Footer/FooterLink/FooterLink.vue"
import { convertToURL } from "src/utils/util"
import { Validators } from "src/utils/validator"
import { defineComponent, Ref, ref } from "vue"
import About from "src/data/About.json"
import Services from "src/data/Service.json"
import SocialMedia from "src/data/SocialMedia.json"
import FormContainer from "src/components/core/form/FormContainer/FormContainer.vue"
import { ContainerData } from "src/components/core/form/FormContainer/FormContainer"
import { Field, Form } from "src/components/core/form"
import { useFetch } from "src/boot/fetch-zeus"
import { useNotification } from "src/compositions/core/notify.composition"

export type InformationType = {
	image: string
	title: string
	id: string
}
export type ContactType = {
	image: string
	id: string
	link: string
}


export default defineComponent({
	components: {
		FormContainer,
		FooterLink
	},
	props: {},
	setup() {
		const fetch = useFetch()
		const notify = useNotification()
		const container: Ref<ContainerData> = ref({
			loading: false
		})

		const form = new Form({
			name: {
				outlined: true,
				component: Field.Text,
				label: "نام",
				class: "col-12",
				rules: [Validators.required]
			},
			phoneNumber: {
				outlined: true,
				component: Field.Text,
				label: "شماره تماس",
				class: "col-12",
				rules: [Validators.required, Validators.phoneNumber]
			},
			description: {
				outlined: true,
				component: Field.Text,
				type: "textarea",
				label: "توضیحات",
				class: "col-12",
				rules: [Validators.required]
			},
		})

		const links = ref({
			service: {
				title: "خدمات",
				data: Services.map(item => ({
					title: item.title,
					link: "/service/" + convertToURL(item.title),
					disable: false
				})),
			},
			department: {
				title: "دپارتمان ها",
				data: [
					{
						title: "هوش مصنوعی و یادگیری ماشین",
						link: "",
						disable: true
					},
					{
						title: "امنیت",
						link: "",
						disable: true
					},
					{
						title: "نرم افزار",
						link: "",
						disable: true
					},
				],
			},
			events: {
				title: "رویدادها",
				data: [
					{
						title: "اخبار",
						link: "/event?tab=اخبار",
						disable: false
					},
					{
						title: "اطلاعیه",
						link: "/event?tab=اطلاعیه",
						disable: false
					}
				],
			},
			education: {
				title: "آموزش",
				data: [
					{
						title: "دوره های آموزشی",
						link: "/education?tab=دوره",
						disable: false
					},
					{
						title: "ارائه",
						link: "/education?tab=ارائه",
						disable: false
					},
					{
						title: "مقالات",
						link: "/education?tab=مقاله",
						disable: false
					},
					{
						title: "مستندات",
						link: "/docs",
						disable: false
					},
					{
						title: "مجلات",
						link: "",
						disable: true
					},
					{
						title: "پادکست ها",
						link: "",
						disable: true
					},
				]
			},
			about: {
				title: "درباره ما",
				data: [
					{
						title: "موقعیت شغلی",
						link: "/powercall",
						disable: true
					},
					{
						title: "تیم ماهان",
						link: "/about-us",
					},
					{
						title: "ارتباط با ما",
						link: "/contact",
					},
				]
			},
			values: {
				title: "فرهنگ سازمانی",
				data: [
					{
						title: "ارزش ها",
						link: "/values",
					},
					{
						title: "OKR",
						link: "/okr",
					},
					{
						title: "مدیریت زمان",
						link: "/time-management",
					},
				]
			}
		})

		const information: Ref<InformationType[]> = ref([
			{
				image: "/icons/building.svg",
				title: `نام شرکت : ${About.companyName}`,
				id: "1"
			},
			{
				image: "/icons/note-info.svg",
				title: `شماره ثبت شرکت : ${About.submitCode}`,
				id: "2"
			},
			{
				image: "/icons/calendar.svg",
				title: `تاریخ تاسیس شرکت : ${About.submitDate}`,
				id: "3"
			},
			{
				image: "/icons/map-pin.svg",
				title:
					`آدرس دفتر مرکزی : ${About.address}`,
				id: "4"
			},
			{
				image: "/icons/smartphone.svg",
				title: `تلفن تماس : ${About.phone}`,
				id: "5"
			},
			{
				image: "/icons/email.svg",
				title: `ایمیل : ${About.email}`,
				id: "6"
			}
		])

		const contact: Ref<ContactType[]> = ref([
			// {
			// 	image: SocialMedia.twitter.icon,
			// 	id: "2",
			// 	link: SocialMedia.twitter.link
			// },
			{
				image: SocialMedia.telegram.icon,
				id: "4",
				link: SocialMedia.telegram.link
			},
			{
				image: SocialMedia.linkedIn.icon,
				id: "5",
				link: SocialMedia.linkedIn.link
			},
			{
				image: SocialMedia.instagram.icon,
				id: "6",
				link: SocialMedia.instagram.link
			},
			{
				image: SocialMedia.youtube.icon,
				id: "7",
				link: SocialMedia.youtube.link
			},
		])

		function entityMutation() {
			const formVal = form.modelValue.value
			return fetch.mutation({
				// createContactUs: [
				// 	{
				// 		data: {
				// 			description: formVal.description,
				// 			// name: formVal.name,
				// 			phoneNumber: formVal.phoneNumber
				// 		}
				// 	},
				// 	{
				// 		id: true
				// 	}
				// ]
			})
		}

		function submit() {
			container.value.loading = true
			const message = "پیام شما با موفقیت ثبت شد، با شما در کمترین زمان ممکن تماس گرفته خواهد شد"
			entityMutation()
				.then(() => {
					form.reset()
					notify.successText(message)
					container.value.loading = false
				})
				.catch(() => container.value.loading = false)
		}

		return {
			container,
			form,
			links,
			information,
			contact,
			submit,
		}
	}
})


