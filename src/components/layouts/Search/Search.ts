
import { convertToURL } from "src/utils/util"
import { defineComponent, nextTick, Ref, ref } from "vue"
import fuzzy from "fuzzy"
import { QSelect } from "quasar"
import { Subject } from "rxjs"
import { debounceTime } from "rxjs/operators"
import ProductData from "src/data/Product.json"
import ServiceData from "src/data/Service.json"
import { useRouter } from "vue-router"
import Education from "src/pages/Education/Education"
import { useEvent } from "src/compositions/pages/event.composition"
import { useEducation } from "src/compositions/pages/education.composition"

export default defineComponent({
	props: {
		searchMode: Boolean
	},
	emits: ["closeSearchMode"],
	setup(props, { emit }) {
		const options: Ref<Array<any>> = ref([])
		const model: Ref<string> = ref("")
		const loading: Ref<boolean> = ref(false)
		const search: Ref<QSelect> = ref(null)
		const education = useEducation()
		const event = useEvent()
		const searchSubject$ = new Subject<string>()
		const routerInstance = useRouter()


		const searchOptions = {
			pre: "<mark>",
			post: "</mark>",
			extract: function (el) { return el.title + "::" + el.description + "::" + el.link + "::" + el.image }
		}

		function getList(word) {
			const services = ServiceData.map(item => ({
				title: item.title,
				description: item.description,
				link: "/service/" + convertToURL(item.title),
				image: item.heroImage
			}))
			const products = ProductData.map(item => ({
				title: item.title,
				description: item.description,
				link: "/product/" + convertToURL(item.link),
				image: item.image
			}))
			education.resetPagination()
			event.resetPagination()
			event.currentText = word
			return education.getPresentations(word).then((presentationRes) => {
				const presentations = presentationRes.map(item => ({
					title: item.title,
					description: item.description,
					link: item.link,
					image: item.image
				}))
				return education.getPosts(word).then((postRes) => {
					const posts = postRes.map(item => ({
						title: item.title,
						description: item.description,
						// link: item.link,
						// image: item.image
					}))
					return education.getCourses(word).then((courseRes) => {
						const courses = courseRes.map(item => ({
							// title: item.title,
							// description: item.description,
							// link: item.link,
							// image: item.image
						}))
						return event.getEvents(null).then((eventRes) => {
							const events = eventRes.map(item => ({
								title: item.title,
								description: item.description,
								link: item.link,
								image: item.image
							}))
							// return services.concat(products).concat(presentations).concat(courses).concat(posts).concat(events)
						})
					})
				})
			})

		}

		searchSubject$.asObservable()
			.pipe(
				debounceTime(500)
			)
			.subscribe((word) => {
				loading.value = true
				getList(word).then((list) => {
					// event.currentText = ""
					// const results = fuzzy.filter(word, list, searchOptions)
					// options.value = results.map(item => {
					// 	if (item["string"]) {
					// 		const itemArray = item["string"].split("::")
					// 		const rawLink = itemArray[2].replace(/<mark>/g, "").replace(/<\/mark>/g, "")
					// 		const desc = "..." + itemArray[1].substring(itemArray[1].indexOf("<mark>") - 50, 200) + "..."
					// 		return {
					// 			link: rawLink,
					// 			title: itemArray[0],
					// 			description: desc,
					// 			image: itemArray[3].replace(/<mark>/g, "").replace(/<\/mark>/g, "")
					// 		}
					// 	}
					// })
					nextTick(() => {
						search.value.refresh()
						search.value.showPopup()
					})
					loading.value = false
				})

			})

		function searchForText(word) {
			searchSubject$.next(word)
		}

		function changeModel(option) {
			if (option) {
				model.value = `<span class="text-white">${option.title}</span>`
				if (routerInstance.currentRoute.value.fullPath != option.link)
					routerInstance.push(option.link)
			}
		}

		function closeSearchMode() {
			emit("closeSearchMode")
		}

		return {
			props,
			options,
			loading,
			search,
			model,
			changeModel,
			closeSearchMode,
			searchForText
		}
	}
})
