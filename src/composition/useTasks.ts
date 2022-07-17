import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
import { userInformation } from "./useUserInformation"

export type TaskType = {
    number: number,
    title: string,
    deadline: string,
    status: string,
    project: string,
    category: string,
    categoryColor: string,
    statusColor: string
}

const { user } = userInformation()

async function getReadTaskData() {

    const returnData = []
    const { data: readTaskData } = await fetchService.task.readTask({
        where: {
            assigneeId: user.value.userId,
            isFinished: false,
        },

    })

    const { data: categoryNames } = await fetchService.category.readCategory({})
    const { data: projectNames } = await fetchService.project.readProject({})


    let counter = 1
    readTaskData.data.filter(task => {
        const obj: TaskType = {
            number: counter,
            deadline: task.deadline,
            status: task.status,
            title: task.title,
            category: "-",
            project: "-",
            categoryColor: "",
            statusColor: ""
        }

        for (const categoryName of categoryNames.data) {
            if (categoryName.id == task.categoryId) {
                obj.category = categoryName.title,
                    obj.categoryColor = categoryName.color
            }
        }
        for (const projectName of projectNames.data) {
            if (projectName.id == task.metadata.projectId) {
                obj.project = projectName.name
            }
        }
        transalteStatus(obj)
        obj.deadline = convertDate(obj.deadline)
        counter++

        returnData.push(obj)
    })
    return returnData
}

function convertDate(date) {
    return moment(date, "YYYY/MM/DD").locale("fa").format("YYYY-MM-DD")
}
function transalteStatus(obj: TaskType) {
    if (obj.status == "Doing") {
        obj.status = "در حال انجام"
        obj.statusColor = "#FCC97D"
    }
    else if (obj.status == "Done") {
        obj.status = "انجام شده"
        obj.statusColor = "#9cd39f"
    }
    else if (obj.status == "Todo") {
        obj.status = "انجام نشده"
        obj.statusColor = "#C4C4C4"
    }
    else if (obj.status == "Blocked") {
        obj.status = "بلاک شده"
        obj.statusColor = "#F06694"

    }
}

async function getCategoryName() {
    const { data: categoryNames } = await fetchService.category.readCategory({})
    const obj = []
    for (const categoryName of categoryNames.data) {
        obj.push(categoryName.title)
    }
    return obj
}


async function getProfileName() {
    const { data: profileNames } = await fetchService.profile.readProfile({})
    const obj = []
    for (const profileName of profileNames.data) {
        obj.push(profileName.fullname)
    }
    return obj
}
export function readTask() {
    return {
        getReadTaskData,
        getCategoryName,
        getProfileName,
        convertDate
    }
}

