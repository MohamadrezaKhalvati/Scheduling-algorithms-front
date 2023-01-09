import { isFunction, isObject, isString } from "src/utils/util"
import { computed, defineComponent, onMounted, PropType, ref } from "vue"
import { FormConfig } from ".."
import Calendar from "../input/Calendar/Calendar.vue"
import Clock from "../input/Clock/Clock.vue"
import ColorPicker from "../input/ColorPicker/ColorPicker.vue"
import File from "../input/File/File.vue"
import Select from "../input/Select/Select.vue"
import Slider from "../input/Slider/Slider.vue"
import Switch from "../input/Switch/Switch.vue"
import Text from "../input/Text/Text.vue"
import EditorWrapper from "src/components/shared/EditorWrapper/EditorWrapper.vue"
import { FieldValue } from "../models/helper/form-types"
import { Field, toEnglish } from "../models/helper/form-utils"


/**
 * @class FormField: the fields of the form
 */
export default defineComponent({
	components: {
		[Field.Calendar]: Calendar,
		[Field.Clock]: Clock,
		[Field.Select]: Select,
		[Field.Slider]: Slider,
		[Field.ColorPicker]: ColorPicker,
		[Field.Text]: Text,
		[Field.File]: File,
		[Field.Switch]: Switch,
		[Field.Editor]: EditorWrapper,
	},

	props: {
		field: {
			required: true,
			type: Object as PropType<FieldValue>
		},
		modelValue: {
			required: true,
		},
		events: {
			type: Object,
			default: () => ({})
		}
	},

	emits: ["update:field", "update:modelValue"],

	setup(props, { emit }) {
		const isHandMade = ref(false)
		const reference = ref<HTMLElement>(null)
		function setDefaultValue(props: object, key: string, defaultProp: any) {
			props[key] =
				props.hasOwnProperty(key) ? props[key] :
					(isFunction(defaultProp[key])
						? defaultProp[key](props)
						: defaultProp[key])
		}


		const childProp = computed(() => {
			setDefaulProps(props.field)
			const output = { ...props.field }
			const filterList = [...FormConfig.childAvoidanceList]
			if (!isHandMade.value) filterList.push("events")
			removeAdditionalFields(output, filterList)
			delete output.class
			return output
		})

		const childEvent = computed(() => {
			return props.field["events"] || {}
		})

		function setHandMade() {
			const component = props.field.component
			isHandMade.value = !!FormConfig.handMadeComponentList.find(
				item => item == component
			)
		}

		function onValChanged(newValue) {
			let eventVal = newValue
			if (shouldBeEnglified(newValue))
				eventVal = toEnglish(newValue)
			emit("update:modelValue", eventVal)
		}

		function removeAdditionalFields(fieldData, filterList) {
			for (const key of filterList) delete fieldData[key]
		}

		function setDefaulProps(fieldValue: FieldValue) {
			const commonPropMap = FormConfig.defaultField.common
			for (const key in commonPropMap)
				setDefaultValue(fieldValue, key, commonPropMap)

			const defaultProp = FormConfig.defaultField.default[props.field["component"]] || []
			for (const key in defaultProp)
				setDefaultValue(fieldValue, key, defaultProp)

			const extendPropMap = FormConfig.defaultField.extend[props.field["component"]] || []
			for (const key in extendPropMap) {
				if (isObject(fieldValue[key]))
					fieldValue[key] = [...extendPropMap[key], ...fieldValue[key]]
				else
					fieldValue[key] = extendPropMap[key]
			}
		}

		function clear(event: Event) {
			onValChanged(props.field.resetValue)
			event.stopPropagation()
			event.preventDefault()
		}

		function shouldBeEnglified(newValue: any) {
			if (isString(newValue) && props.field["type"] != "textarea")
				return true
			return false
		}

		onMounted(() => {
			emit("update:field", {
				...props.field,
				ref: reference.value
			})
		})

		setHandMade()

		return {
			reference,
			childEvent,
			childProp,
			onValChanged,
			removeAdditionalFields,
			setDefaulProps,
			clear,
		}
	}


})

