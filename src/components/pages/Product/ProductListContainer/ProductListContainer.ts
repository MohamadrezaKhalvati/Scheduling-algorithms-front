import ProductCard from "src/components/pages/Product/ProductCard/ProductCard.vue"
import { ProductType } from "src/components/pages/Product/ProductCard/ProductCard"
import CloudImage from "src/components/shared/CloudImage/CloudImage.vue"
import TagContainer from "src/components/shared/TagContainer/TagContainer.vue"
import { TagType } from "src/components/shared/TagContainer/TagContainer"
import { defineComponent, Ref, ref } from "vue"
import fuzzy from "fuzzy"
import ProductData from "./../../../../data/Product.json"
import Pagination from "src/components/shared/Pagination/Pagination.vue"
import { PaginationInput } from "src/components/shared/Pagination/Pagination"
import { useSize } from "src/boot/size"
import TagList from "./../../../../data/Service.json"
import { Transition } from "vue"


export type CategoryType = {
	title: string;
	id: string;
}

export default defineComponent({
	components: {
		ProductCard,
		TagContainer,
		Pagination,
		CloudImage
	},
	props: {
		tags: {
			type: Array as () => TagType[],
			required: true
		}
	},
	setup(props) {
		const { size } = useSize()

		const paginationInput: Ref<PaginationInput> = ref({
			currentPage: 1,
			pageSize: size.value.lg ? 6 : (size.value.md ? 4 : 2),
			pageAmount: 1
		})

		function applyPagination(productList: ProductType[]) {
			paginationInput.value.pageAmount = Math.ceil(productList.length / paginationInput.value.pageSize)
			return productList.filter((_, index) => {
				const upperLimit = index < paginationInput.value.currentPage * paginationInput.value.pageSize
				const lowerLimit = index >= (paginationInput.value.currentPage - 1) * paginationInput.value.pageSize
				return upperLimit && lowerLimit
			})
		}

		function mapProductsToProductType(rawData: any[]) {
			const data = rawData.map(item => ({
				description: item.description,
				title: item.title,
				image: item.image,
				techs: item.techs,
				service: item.service.split(","),
				link: item.link
			}))
			return applyPagination(data)
		}

		const filter: Ref<any> = ref({
			text: "",
			service: ""
		})

		const products: Ref<ProductType[]> = ref(mapProductsToProductType(ProductData))


		function filterProductsByService() {
			if (!filter.value.service) {
				products.value = mapProductsToProductType(ProductData)
			}
			else {
				const filteredData = ProductData.filter(item => {
					return item.service.includes(filter.value.service)
				})
				products.value = mapProductsToProductType(filteredData)
			}
		}

		function setServiceFilterValue(value) {
			filter.value.service = value
			if (paginationInput.value.currentPage != 1)
				paginationInput.value.currentPage = 1
			else
				filterProductsByService()
		}

		function filterProductByText(word: string) {
			const results = fuzzy.filter(word, ProductData, { extract: (el) => el.title + "::" + el.description })
			const filteredData = ProductData.filter(item => {
				for (const res of results) {
					if (res.score > 50 && res.string.split("::")[0] == item.title)
						return item
				}
			})
			products.value = mapProductsToProductType(filteredData)
		}

		function search(word: string, shouldReset = true) {
			if (shouldReset) paginationInput.value.currentPage = 1
			if (word) {
				filterProductByText(word)
			}
			else if (filter.value.service) {
				filterProductsByService()
			}
			else {
				products.value = mapProductsToProductType(ProductData)
				filter.value.service = null
			}
		}

		return {
			props,
			filter,
			products,
			search,
			setServiceFilterValue,
			filterProductsByService,
			paginationInput,
			TagList,
			Transition
		}
	}
})

