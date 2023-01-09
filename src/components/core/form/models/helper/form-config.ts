import { Validators } from "src/utils/validator"
import { Field } from "./form-utils"


export const imageTypes = [
  "png", "jpg", "jpeg", "gif", "webp"
]

export const handMadeComponentList = [
  Field.Calendar,
  Field.Slider,
  Field.Clock,
  Field.Switch,
  Field.Select,
  Field.Text,
  Field.Editor
]

export const childAvoidanceList = [
  "component",
  "clearable",
  "value",
  "passwordToggle"]

export const defaultValue = {
  Multiple: []
}

export const defaultField = {
  common: {
    dense: true,
    events: {},
    filled: true,
    iconColor: field => field.iconColor ? field.iconColor : "primary",
  },

  default: {
    [Field.Calendar]: {
      calendar: "persian"
    },
    [Field.Select]: {
      mapOptions: true,
      emitValue: true,
      optionsDense: true,
      useChips: field => field.multiple ? true : false,
    },
    [Field.Text]: {
      passwordToggle: field => (field.type == "password" ? true : false)
    },
    [Field.Switch]: {
      type: "q-checkbox",
    }
  },

  extend: {
    [Field.Calendar]: {
      rules: [Validators.date]
    },
    [Field.Clock]: {
      rules: [Validators.time]
    }
  }
}
