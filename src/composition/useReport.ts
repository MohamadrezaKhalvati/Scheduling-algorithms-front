import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
import { DateRange } from "src/utils/swagger/Api"
import { ref } from "vue"
import { ApiPagination, readTask } from "./useTasks"
import { userInformation } from "./useUserInformation"

const { user } = userInformation()
const { convertDateToJalali } = readTask()




export type ReportTableRowType = {
    number: number,
    createDate: string,
    date: string,
    isvalid: boolean,
    totalHours: string
}
export type ReportTableColumnsType = {
    name: string,
    label: string,
    required: boolean,
    align: string,
    field: any,
    format?: any,
    sortable?: boolean
}
export type ReportTableRowsType = {

}
export type rawReportTimeDataClassified = {
    startDate: string,
    endDate: string,
    value: number,
    category: string
}

export type GetWorkHoursClassifiedReportByFIlterType = {
    startDate: string,
    endDate: string
}
export type ReportTimeDataClassified = {
    name: string,
    data: []
}
export type ReportChartSeries = {
    name: string,
    data: []
}
export type ReportTimeAvgType = {
    number: number,
    time: number
}



const searchInput = ref<GetReportDataHoursClassifiedInputType>({
    mode: "Category",
    operation: "sum",
    unit: 1,
    userId: user.value.userId,
    duration: {
        startDate: moment().add(-7, "days").format("YYYY-MM-DD"),
        endDate: moment().add(-1, "days").format("YYYY-MM-DD")
    }
})


export type GetReportDataHoursClassifiedInputType = {
    operation: string,
    mode: string,
    unit: number,
    userId: string,
    duration: DateRange
}

const allReportNumber = ref(0)

async function getReportData() {

    const { data: reportData } = await fetchService.report.readReport({
        where: {
            userId: user.value.userId,
        },
        pagination: {
            skip: 0,
            take: 6
        },
        sortBy: {
            descending: true,
            field: "date"
        }
    })
    const mapedReport = mapReportData(reportData, 1)
    allReportNumber.value = reportData.count

    return mapedReport

}
async function GetReportDataPagination(searchInput: ApiPagination) {
    const { data: readReportData } = await fetchService.report.readReport({
        where: {
            userId: user.value.userId
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

    const mapedReport = mapReportData(readReportData, searchInput.pagination.skip)
    allReportNumber.value = readReportData.count
    return mapedReport

}
function mapReportData(reportData, startRowNumber: number) {
    const returnReport = []

    let counter = startRowNumber
    reportData.data.filter(report => {

        const obj: ReportTableRowType = {
            number: counter,
            createDate: report.createdDate,
            date: report.date,
            isvalid: report.isValid,
            totalHours: "0"
        }

        obj.createDate = convertDateToJalali(obj.createDate)
        obj.date = convertDateToJalali(obj.date)
        obj.totalHours = getReportTotalHours(report)
        counter++

        returnReport.push(obj)
    })
    return returnReport
}
async function getReportDataByFilter(startData: string, endDate: string) {

    const { data: reportData } = await fetchService.report.readReport({
        where: {
            userId: user.value.userId,
            date: {
                startDate: startData,
                endDate: endDate
            }
        },
        sortBy: {
            descending: true,
            field: "date"
        }
    })

    const mapedReport = mapReportData(reportData, 1)
    allReportNumber.value = reportData.count
    return mapedReport

}


function convertMode(category: string) {
    let convertedCategory = ""
    if (category == "پروژه") {
        convertedCategory = "Project"
    }
    else if (category == "دسته بندی") {
        convertedCategory = "Category"
    }
    return convertedCategory
}
function getReportTotalHours(report) {
    let totalHoursPerMinuts = 0
    for (const item of report.itemList) {
        totalHoursPerMinuts += item.spentTime
    }

    return `${Math.floor(totalHoursPerMinuts / 60)}:${totalHoursPerMinuts % 60}`

}

async function getReportWorkHours() {

    const returnReportData = []
    const chartLabelTimeData = []
    const endDate = moment().add(-2, "days").format("YYYY-MM-DD")
    const startDate = moment().add(-29, "days").format("YYYY-MM-DD")


    const { data: reportWorkHoursData } = await fetchService.report.getWorkHoursReport({
        where: {
            userId: user.value.userId,
            operation: "avg",
            unit: 7,
            duration: {
                startDate: startDate,
                endDate: endDate
            }
        }
    })
    const counter = 1
    reportWorkHoursData.data.filter(report => {


        returnReportData.push(Math.round(report.value))
        chartLabelTimeData.push((Math.round(report.value) / 60).toFixed(2))

    })
    return {
        returnReportData,
        chartLabelTimeData
    }
}


async function getWorkHoursClassifiedReport() {

    const { duration: { endDate, startDate }, mode, unit, operation } = searchInput.value

    searchInput.value.mode = convertMode(mode) || searchInput.value.mode



    const { data: reportWorkHoursDataClassified } = await fetchService.report.getWorkHoursClassifiedReport({
        where: searchInput.value
    })

    const mapedData = await mapReportClassifiedData(reportWorkHoursDataClassified.data, startDate, endDate)

    return mapedData

}

async function mapReportClassifiedData(data, startDate, endDate) {
    const series = []
    const dataa = []

    const { data: categoryNames } = await fetchService.category.readCategory({})
    data.forEach(report => {

        const rawObj: rawReportTimeDataClassified = {
            startDate: convertDateToJalali(report.startDate),
            endDate: convertDateToJalali(report.endDate),
            value: parseFloat((report.value / 60).toFixed(2)),
            category: report.category
        }

        for (const categoryName of categoryNames.data) {
            if (categoryName.id == report.category) {
                rawObj.category = categoryName.title
            }
        }
        dataa.push(rawObj)
    })

    for (const obj of dataa) {
        const b = series.find(element => element.name == obj.category)
        if (!b)
            series.push({
                name: obj.category,
                data: []
            })
    }


    for (const element of series) {
        let tempDate = moment(startDate)

        while (tempDate.diff(moment(endDate)) <= 0) {

            const obj = dataa.find((a) => (element.name == a.category && a.startDate == tempDate.locale("fa").format("YYYY-MM-DD")))
            if (obj) {
                element.data.push(obj.value)
            }
            else {
                element.data.push(0)
            }
            tempDate = moment(tempDate).add(1, "day")
        }
    }

    for (const object of series) {
        const avg = []
        for (let i = 0; i < Object.keys(object.data).length; i = i + searchInput.value.unit) {
            let sum = 0
            for (let j = i; j < i + searchInput.value.unit; j++) {
                sum = sum + object.data[j]
            }
            avg.push(sum)
        }
        object.data = avg
    }

    return series
}
export function readReport() {
    return {
        getReportData,
        getReportWorkHours,
        getWorkHoursClassifiedReport,
        getReportDataByFilter,
        GetReportDataPagination,
        allReportNumber,
        searchInput,
    }
}