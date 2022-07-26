import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
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
    const startDate = moment().add(1, "days").add(-1, "months").format("YYYY-MM-DD")

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
    const returnedData: ReportChartSeries[] = []
    const series = []
    const dataa = []
    const endDate = moment().add(-1, "days").format("YYYY-MM-DD")
    const startDate = moment().add(-7, "days").format("YYYY-MM-DD")

    const { data: reportWorkHoursDataClassified } = await fetchService.report.getWorkHoursClassifiedReport({
        where: {
            mode: "Category",
            unit: 1,
            operation: "avg",
            userId: user.value.userId,
            duration: {
                startDate: startDate,
                endDate: endDate
            }
        }
    })

    const { data: categoryNames } = await fetchService.category.readCategory({})
    reportWorkHoursDataClassified.data.forEach(report => {

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

    return series

}

export function readReport() {
    return {
        getReportData,
        getReportWorkHours,
        getWorkHoursClassifiedReport,
        getReportDataByFilter,
        GetReportDataPagination,
        allReportNumber
    }
}