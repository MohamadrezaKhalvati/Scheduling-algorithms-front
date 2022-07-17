import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
import { readTask } from "./useTasks"
import { userInformation } from "./useUserInformation"

const { user } = userInformation()
const { convertDate } = readTask()
export type ReportType = {
    number: number,
    createDate: string,
    date: string,
    isvalid: boolean,
    totalHours: string
}

export type ReportTimeAvgType = {
    number: number,
    time: number
}
async function getReportData() {
    const returnReport = []

    const { data: reportData } = await fetchService.report.readReport({
        where: {
            userId: user.value.userId
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


    let counter = 1
    reportData.data.filter(report => {

        const obj: ReportType = {
            number: counter,
            createDate: report.createdDate,
            date: report.date,
            isvalid: report.isValid,
            totalHours: "0"
        }

        obj.createDate = convertDate(obj.createDate)
        obj.date = convertDate(obj.date)
        obj.totalHours = getReportTotalHours(report)
        counter++

        returnReport.push(obj)
    })

    return returnReport


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

export function readReport() {
    return {
        getReportData,
        getReportWorkHours
    }
}