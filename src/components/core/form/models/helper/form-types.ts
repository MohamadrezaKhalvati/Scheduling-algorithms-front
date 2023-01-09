import { QCheckbox, QDate, QFile, QInput, QRadio, QSelect, QSlider, QTime, QToggle } from "quasar";
import { ComponentPublicInstance } from "vue";
import { Field } from "./form-utils";

export type SelectItem = {
  value: any;
  label: string;
}

export type ExtendedSelectItem = { description: string } & SelectItem

export type Files = {
  id: string;
  path: string;
}


type JustMethodKeys<T> = ({ [P in keyof T]: T[P] extends Function ? P : never })[keyof T];
export type PickProp<T extends ComponentPublicInstance> = Omit<T, keyof ComponentPublicInstance | JustMethodKeys<T> | "modelValue">

type AdditionalField = {
  initialValue?: any;
  resetValue?: any;
  class?: string | string[];
  rules?: Function[];
  events?: any;
  skipRender?: boolean;
  iconColor?: string;
	icon? : string
}

type SelectField = PickProp<Omit<QSelect, "options">> & {
  component: Field.Select;
  highlightClass?: string;
  limitCount?: string;
  ref?: QSelect;
  options: SelectItem[];
}

type InputField = PickProp<QInput> & {
  component: Field.Text;
  ref?: QInput;
}

type ColorPickerField = PickProp<QInput> & {
  component: Field.ColorPicker;
  ref?: QInput;
}

type RadioField = PickProp<QRadio> & {
  component: Field.Switch;
  ref?: QRadio;
  type: "QSwitch";
}

type CheckboxField = PickProp<QCheckbox> & {
  component: Field.Switch;
  ref?: QCheckbox;
  type: "QCheckbox";
}

type ToggleField = PickProp<QToggle> & {
  component: Field.Switch;
  ref?: QToggle;
  type: "QToggle";
}

type SliderField = PickProp<Omit<QSlider, "label">> & {
  component: Field.Slider;
  ref?: QSlider;
}

type ClockField = PickProp<QTime> & {
  component: Field.Clock;
  ref?: QTime;
}

type CalendarField = PickProp<QDate> & {
  component: Field.Calendar;
  ref?: QDate;
}

type FileField = PickProp<QFile> & {
  component: Field.File;
  ref?: QFile;
}

type EditorField = {
  component: Field.Editor;
  ref?: QDate;
  modelValue?: any,
  isEditable?: boolean
}

export type FieldValue = AdditionalField & (SelectField | InputField |
  RadioField | CheckboxField | ToggleField | SliderField |
  ClockField | CalendarField | ColorPickerField | EditorField | FileField)

export type FieldItem = {
  [key: string]: FieldValue;
}
