import { readTask } from "src/composition/useTasks"
import { userInformation } from "src/composition/useUserInformation"
import { defineComponent, ref, watch } from "vue"
export default defineComponent({
    setup() {
        const { getReadTaskData } = readTask()
        const { user } = userInformation()
        const filter = ref(false)
        const dense = ref(false)
        const categoryModel = ref(null)
        const providedModel = ref(null)
        const denseOpts = ref(false)
        const dateFrom = ref("")
        const dateTo = ref("")
        const columns = [
            { name: "number", align: "center", label: "شماره", field: "number" },
            { name: "taskName", required: true, label: "نام تسک", align: "left", field: "taskName", format: val => `${val}`, sortable: true },
            { name: "deadline", label: "مهلت پایانی", field: "deadline", sortable: true },
            { name: "situation", label: "وضعیت", field: "situation", sortable: true },
            { name: "project", label: "پروژه", field: "project" },
            { name: "category", label: "دسته بندی", field: "category", sortable: true },
        ]
        const rows = [
            {
                number: "#1",
                taskName: "Vuejs project",
                deadline: "1401-04-21",
                situation: "در حال انجام",
                project: "-",
                category: "آموزش"
            },

        ]
        const categoryOptions = [
            "آموزش",
            "برگزاری دوره آموزشی",
            "تحقیق و توسعه",
            "تست",
            "جلسات",
            "فنی",
            "مارکتینگ",
            "مالی اداری",
            "متفرقه",
            "مظالعه دوره",
            "کارآموزان",
        ]
        const providedOptions = [
            "asdasd",
            "asdad",
            "asdassd",
            "asdasssssd",
            "asdasaaaaaaaaaaaad",

        ]

        watch(() => user.value.userId, async () => {
            const readTaskData = await getReadTaskData()
            console.log(readTaskData.data)
        })
        return {
            categoryOptions,
            categoryModel,
            denseOpts,
            columns,
            rows,
            filter,
            dense,
            providedModel,
            dateFrom,
            dateTo
        }
    }
})