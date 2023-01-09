import { QForm } from "quasar"
import { nextTick, ref } from "vue"
import { Type } from ".."
import { FieldValue } from "./helper/form-types"

type ValuesType<T> = Partial<Record<keyof T, any>>
type FieldsType<T> = T & Type.FieldItem
type SingleValue<T> = T[keyof T];
type FieldType<T> = SingleValue<FieldsType<T>>

/**
 * @class Form
 */
export default class Form<T> {
  modelValue = ref<ValuesType<T>>({})
  fields = ref<FieldsType<T>>(null)
  ref = ref<QForm>(null)
  /**
   * @constructor
   * @param fieldٰsConfig the list of fields
   */
  constructor(fieldٰsConfig: FieldsType<T>) {
    this.fields.value = fieldٰsConfig
    this.reset()
  }

  /**
   * reseting form and values
   */
  reset() {
    for (const key in this.fields.value) {
      const field = this.fields.value[key]
      this.modelValue.value[key] = this.getDefaultValue(field)
    }
    if (this.ref.value) {
      this.ref.value.resetValidation()
      nextTick(() => this.ref.value.resetValidation())
    }
  }

  addField(key: string, options: FieldValue) {
    this.fields.value[key] = options
  }

  resetValidator() {
    this.ref.value.resetValidation()
  }

  async validate() {
    await this.ref.value.validate(true)
    return await this.ref.value.validate(true)
  }

  /**
   * setting your desired values as form value
   * @param value the desired value
   */
  set(value: ValuesType<T>) {
    this.reset()
    this.patch(value)
  }

  setRef(form: QForm) {
    this.ref.value = form
  }

  /**
   * setting your desired values as form value
   * @param value the desired value
   */
  patch(value: ValuesType<T>) {
    this.modelValue.value = {
      ...this.modelValue.value,
      ...value
    }
  }


  /**
   * set fields to an empty object
   */
  removeFields() {
    this.fields.value = {}
  }

  /**
   * getting default values of form field
   * @param field the desired field of the form
   */
  private getDefaultValue(field: FieldType<T>) {
    let output = undefined

    if (field.initialValue != undefined)
      output = field.initialValue

    if (field.resetValue != undefined)
      output = field.resetValue

    else {
      if (field["multiple"])
        output = []
    }
    return output
  }
}
