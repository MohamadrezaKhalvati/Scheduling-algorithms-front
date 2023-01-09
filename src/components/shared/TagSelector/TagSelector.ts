import { useTags } from "src/compositions/Panel/Tag.composition"
import { defineComponent, ref, watch } from "vue"

export default defineComponent({
	props: {
		getTagVal: Function
	},
	setup(props) {
		const tagVal = ref([])
		const tags = ref([])
		const filterOptions = ref()
		let stringOptions = []

		const { readTags, CreateTag } = useTags()

		async function currentTag() {
			const {readTag} = await readTags()
			stringOptions = readTag.data.map((item) => {return item.title})
		}

		watch(tagVal , async () => {
			tags.value = []
			const {readTag} = await readTags()
			readTag.data.map((item) => {
				tagVal.value.map((tag) => {
					if(item.title == tag) {
						tags.value.push(item.id)
					}
				})
			})
			props.getTagVal(tags)
		})

		currentTag()

		const createValue = async (val, done) => {
			if (val.length > 0) {
				if (!stringOptions.includes(val)) {
					stringOptions.push(val)
					CreateTag(val)
				}
				done(val, "toggle")
			}
		}

		const filterFn = async (val, update) => {
			update(() => {
				if (val === "") {
					filterOptions.value = stringOptions
				}
				else {
					const needle = val.toLowerCase()
					filterOptions.value = stringOptions.filter(
						v => v.toLowerCase().indexOf(needle) > -1
					)
				}
			})
		}

		return{
			filterOptions,
			filterFn,
			createValue,
			tagVal
		}
	}
})
