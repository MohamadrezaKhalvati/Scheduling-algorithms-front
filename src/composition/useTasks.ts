import cleanDeep from "clean-deep"
import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
import { TaskWhereData } from "src/utils/swagger/Api"
import { userInformation } from "./useUserInformation"


export type TaskTableColumnsType = {
    name: string,
    align: string,
    label: string,
    field: string,
    sortable?: boolean,
    required?: boolean
}

export type UiPagination = {
    sortBy: string,
    descending: boolean,
    page: number,
    rowsNumber: number,
    rowsPerPage: number,
    rowsPerPageOption: []
}
export type ApiPagination = {
    pagination: {
        skip: number,
        take: number
    },
    sortBy: {
        sortBy: string,
        descending: boolean,
    }
}
export type TaskTableRowType = {
    number: number,
    title: string,
    deadline: string,
    deadlineColor?: string,
    status: string,
    project: string,
    category: string,
    categoryColor?: string,
    statusColor?: string,
    statusTextColor?: string
}
export type rawFilterTaskType = {
    dateFromInGeorgian?: string,
    dateToInGeorgian?: string,
    categoryName?: string,
    providedName?: string,
    title?: string,

}

const { user } = userInformation()

async function getTaskDataPagination(searchInput: ApiPagination) {
    const { data: readTaskData } = await fetchService.task.readTask({
        where: {
            assigneeId: user.value.userId,
            isFinished: false
        },
        pagination: {
            skip: searchInput.pagination.skip,
            take: searchInput.pagination.take
        },
        sortBy: {
            descending: searchInput.sortBy.descending,
            field: searchInput.sortBy.sortBy
        }
    })

    const mapedData = await mapTaskData(readTaskData)
    return mapedData


}

async function mapTaskData(readTaskData) {
    const returnData = []
    let counter = 1
    for (const task of readTaskData.data) {
        const category = await convertCategoryIdToCategoryName(task.categoryId)
        const projectName = await convertProjectIdToProjectName(task.metadata.projectId)
        const deadlineColor = setDeadlineColor(task.deadline)
        const deadline = convertDateToJalali(task.deadline)
        const status = setStatus(task.status)

        const obj: TaskTableRowType = {
            number: counter,
            category: category.categoryName,
            project: projectName,
            deadline: deadline,
            title: task.title,
            status: status.status,
            statusColor: status.statusColor,
            statusTextColor: status.statusTextColor,
            deadlineColor: deadlineColor,
            categoryColor: category.categoryColor
        }

        returnData.push(obj)
        counter++
    }
    return returnData
}
async function getReadTaskData() {


    const { data: readTaskData } = await fetchService.task.readTask({
        where: {
            assigneeId: user.value.userId,
            isFinished: false,
        },
    })

    const mapedData = mapTaskData(readTaskData)


    return mapedData
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

        const category = await convertCategoryIdToCategoryName(data.categoryId)
        const deadline = convertDateToJalali(data.deadline)
        const deadlineColor = setDeadlineColor(data.deadline)
        const status = setStatus(data.status)
        const projectName = await convertProjectIdToProjectName(data.metadata.projectId)
        const obj: TaskTableRowType = {
            number: coutner,
            category: category.categoryName,
            categoryColor: category.categoryColor,
            deadline: deadline,
            deadlineColor: deadlineColor,
            status: status.status,
            statusTextColor: status.statusTextColor,
            statusColor: status.statusColor,
            title: data.title,
            project: projectName,

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
    const { data: categoryIds } = await fetchService.category.readCategory({})
    let categoryName = ""
    let categoryColor = ""

    for (const category of categoryIds.data) {
        if (categoryId == category.id) {
            categoryName = category.title
            categoryColor = category.color
        }
    }
    return { categoryName, categoryColor }
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
function convertDateToJalali(date: string) {
    return moment(date, "YYYY/MM/DD").locale("fa").format("YYYY-MM-DD")
}
function setDeadlineColor(deadline: string) {
    const deadlinee = moment(deadline)
    let deadlineColor = ""

    if (deadlinee.diff(moment()) > 0) {
        deadlineColor = "#388E3C"
    }
    else if (deadlinee.diff(moment()) <= -110789889) {
        deadlineColor = "#B71C1C"
    }
    else {
        deadlineColor = "#F57F17"
    }
    return deadlineColor
}

function setStatus(status) {
    let statusColor = ""
    let statusTextColor = ""
    if (status == "Doing") {
        status = "در حال انجام"
        statusColor = "#FCC97D"
        statusTextColor = "#784902"
    }
    else if (status == "Done") {
        status = "انجام شده"
        statusColor = "#9cd39f"
        statusTextColor = "#234D25"
    }
    else if (status == "Todo") {
        status = "انجام نشده"
        statusColor = "#C4C4C4"
        statusTextColor = "#454545"
    }
    else if (status == "Blocked") {
        status = "بلاک شده"
        statusColor = "#F06694"
        statusTextColor = "#4F0820"
    }
    return { statusColor, status, statusTextColor }
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
        getReadTaskDataByFilter,
        getTaskDataPagination
    }
}

