export function toEnglish(value: string | number) {
  let outputString = ""
  const valueCpy = value.toString()
  for (let index = 0; valueCpy && index < valueCpy.length; index++) {
    switch (valueCpy[index]) {
      case "۰": outputString += "0"; break
      case "۱": outputString += "1"; break
      case "۲": outputString += "2"; break
      case "۳": outputString += "3"; break
      case "۴": outputString += "4"; break
      case "۵": outputString += "5"; break
      case "۶": outputString += "6"; break
      case "۷": outputString += "7"; break
      case "۸": outputString += "8"; break
      case "۹": outputString += "9"; break
      default: outputString += valueCpy[index]
    }
  }
  return outputString
}

export enum Field {
  Editor = "Editor",
  Select = "Selector",
  Text = "Textor",
  ColorPicker = "ColorPicker",
  Calendar = "Calendar",
  Clock = "Clock",
  Switch = "SwitchItem",
  Slider = "Slider",
  File = "Filer"
}

export function isObject(val) {
  if (val === null) { return false }
  return ((typeof val === "object"))
}
