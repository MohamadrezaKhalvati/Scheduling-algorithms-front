import DialogForm from "src/components/shared/Dialog/DialogForm/DialogForm.vue"
import { computed, defineComponent, PropType } from "vue"
import { Form } from "../../form"

export default defineComponent({
  components: {
    DialogForm
  },
  props: {
    columns: {
      type: Array as PropType<TableConfig["columns"]>,
      default: () => ([])
    },
    events: {
      type: Object,
      default: () => ({})
    },
    sticky: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Array as PropType<TableConfig["selected"]>,
      default: () => ([])
    },
    pagination: {
      type: Object as PropType<TableConfig["pagination"]>,
      default: () => ({})
    }
  },
  emits: ["update:selected", "update:pagination", "filter"],
  setup(props, { emit, attrs }) {

    const isEmpty = computed(() => {
      const isLoading = !!attrs.loading
      const hasData = !!attrs.rows["length"]
      return !isLoading && !hasData
    })

    const computedAttrs = computed(() => {
      const newAttrs = { ...attrs }
      delete newAttrs["class"]
      return newAttrs
    })

    const internalSelected = computed({
      get: () => props.selected,
      set: (value) => emit("update:selected", value)
    })

    const internalPagination = computed({
      get: () => props.pagination,
      set: (value) => {
        emit("update:pagination", value)
      }
    })

    const transformedColumns = computed(() => {
      return props.columns.map((item) => ({
        name: item.key,
        align: item.align || "left",
        format: item.formater,
        field: item.valueGetter || item.key,
        "row-key": item["row-key"] || "id",
        //using same key-value pairs.
        label: item.label,
        style: item.style,
        classes: item.classes,
        headerStyle: item.headerStyle,
        headerClasses: item.headerClasses,
        sortable: item.sortable,
        required: item.required,
        sort: item.sort,
      }))
    })

    const childEvents = computed(() => {
      const events = { ...props.events }
      delete events["filter"]
      return events
    })

    const childClass = computed(() => {
      if (props.sticky) return "sticky-table"
      return ""
    })

    return {
      transformedColumns,
      childEvents,
      internalSelected,
      internalPagination,
      childClass,
      isEmpty,
      computedAttrs,
    }
  }
})

type TableConfigField<T> = {
  key: string;
  label?: string;
  style?: string;
  "row-key"?: string;
  classes?: string;
  headerStyle?: string | any;
  headerClasses?: string;
  sortable?: boolean;
  required?: boolean;
  align?: string;
  valueGetter?: (row: T) => any;
  sort?: (a, b, rowA?: T, rowB?: T) => number;
  formater?: (val: string, row: T) => any;
}

export type TableContainerConfig<T = any> = {
  transform?: (val: Form<T>["modelValue"]["value"]) => any;
}

export type TableConfig<T = any> = {
  columns?: TableConfigField<T>[];
  indexer?: boolean;
  pagination?: {
    page: number;
    rowsPerPage: number;
    rowsNumber?: number;
    sortBy?: string;
    descending?: boolean;
  };
  loading: boolean;
  rowsPerPageOptions?: number[];
  rows: T[];
  selected?: T[];
  events?: Record<string, any>;
} & Record<string, any>

function notEmpty(val: any[] | Record<string, any>) {
  if (Array.isArray(val))
    return val.length
  if (val && typeof val === "object") {
    return Object.keys(val).length
  }
  return !!val
}
