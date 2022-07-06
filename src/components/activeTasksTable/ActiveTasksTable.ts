import { defineComponent } from "vue"

export default defineComponent({
    setup() {
        const columns = [
            { name: "number", align: "center", label: "شماره", field: "number" },
            { name: "task name", required: true, label: "نام تسک", align: "left", field: "taskName", format: val => `${val}`, sortable: true },
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

        return {
            columns,
            rows
        }
    }
})