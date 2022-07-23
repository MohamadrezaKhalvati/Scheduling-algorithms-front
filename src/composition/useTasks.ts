import cleanDeep from "clean-deep"
import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
import { TaskWhereData } from "src/utils/swagger/Api"
import { userInformation } from "./useUserInformation"

export type TaskType = {
    number: number,
    title: string,
    deadline: string,
    status: string,
    project: string,
    category: string,
    categoryColor?: string,
    statusColor?: string
}
export type rawFilterTaskType = {
    dateFromInGeorgian?: string,
    dateToInGeorgian?: string,
    categoryName?: string,
    providedName?: string,
    title?: string,

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



    let counter = 1
    for (const task of readTaskData.data) {
        const categoryName = await convertCategoryIdToCategoryName(task.categoryId)
        const projectName = await convertProjectIdToProjectName(task.metadata.projectId)
        const deadline = convertDateToJalali(task.deadline)
        const status = convertStatus(task.status)
        const obj: TaskType = {
            number: counter,
            category: categoryName,
            project: projectName,
            deadline: deadline,
            title: task.title,
            status: status.status,
            statusColor: status.statusColor,
            categoryColor: "#d0d2d6"
        }

        returnData.push(obj)
        counter++
    }
    return returnData
}

async function getReadTaskDataByFilter(data: rawFilterTaskType) {
    const returnData = []
    const categoryId = await convertCagetoryNameToCategoryId(data)
    const responsibeId = await convertProfileNameToProfileId(data)
    const startDate = data.dateFromInGeorgian
    const endDate = data.dateToInGeorgian

    let rawWhere: TaskWhereData = {
        assigneeId: user.value.id,
        categoryId: categoryId,
        responsibleId: responsibeId,
        dateRange: {
            startDate: startDate,
            endDate: endDate
        },
        title: data.title,
        isFinished: false
    }

    rawWhere = cleanDeep(rawWhere)
    const { data: readTaskData } = await fetchService.task.readTask({
        where: rawWhere,
        pagination: {
            skip: 0,
            take: 7
        },
        sortBy: {
            field: "deadline",
            descending: false
        }
    })

    let coutner = 1
    for (const data of readTaskData.data) {

        const categoryName = await convertCategoryIdToCategoryName(data.categoryId)
        const deadline = convertDateToJalali(data.deadline)
        const status = convertStatus(data.status)
        const projectName = await convertProjectIdToProjectName(data.metadata.projectId)
        const obj: TaskType = {
            number: coutner,
            category: categoryName,
            deadline: deadline,
            status: status.status,
            title: data.title,
            project: projectName,
            statusColor: status.statusColor,
            categoryColor: "#d0d2d6"

        }
        returnData.push(obj)
        coutner++
    }

    return returnData
}


async function convertProjectIdToProjectName(projectId: string) {
    const { data: projectNames } = await fetchService.category.readCategory({})
    let projectName = "-"
    for (const project of projectNames.data) {
        if (projectId == project.id) {
            projectName = project.title
        }
    }
    return projectName
}
async function convertCagetoryNameToCategoryId(rawData: rawFilterTaskType) {
    const { data: categoryNames } = await fetchService.category.readCategory({})
    let categortId = ""

    for (const category of categoryNames.data) {
        if (rawData.categoryName == category.title) {
            categortId = category.id
        }
    }
    return categortId
}

async function convertCategoryIdToCategoryName(categoryId: string) {
    const { data: categroyIds } = await fetchService.category.readCategory({})
    let categoryName = ""
    for (const category of categroyIds.data) {
        if (categoryId == category.id) {
            categoryName = category.title
        }
    }
    return categoryName
}

async function convertProfileNameToProfileId(rawData: rawFilterTaskType) {
    const { data: profileNames } = await fetchService.profile.readProfile({})
    let profileId = ""
    for (const profile of profileNames.data) {
        if (rawData.providedName == profile.fullname) {
            profileId = profile.id
        }
    }
    return profileId
}
function convertDateToJalali(date) {
    return moment(date, "YYYY/MM/DD").locale("fa").format("YYYY-MM-DD")
}


function convertStatus(status) {
    let statusColor = ""
    if (status == "Doing") {
        status = "در حال انجام"
        statusColor = "#FCC97D"
    }
    else if (status == "Done") {
        status = "انجام شده"
        statusColor = "#9cd39f"
    }
    else if (status == "Todo") {
        status = "انجام نشده"
        statusColor = "#C4C4C4"
    }
    else if (status == "Blocked") {
        status = "بلاک شده"
        statusColor = "#F06694"
    }
    return { statusColor, status }
}

async function getCategoryName() {
    const { data: categoryNames } = await fetchService.category.readCategory({})
    const obj = []
    for (const category of categoryNames.data) {
        obj.push(category.title)
    }
    return obj
}


async function getProfileName() {
    const { data: profileNames } = await fetchService.profile.readProfile({})
    const obj = []
    for (const profile of profileNames.data) {
        obj.push(profile.fullname)
    }
    return obj
}


export function readTask() {
    return {
        getReadTaskData,
        getCategoryName,
        getProfileName,
        convertDateToJalali,
        getReadTaskDataByFilter
    }
}

