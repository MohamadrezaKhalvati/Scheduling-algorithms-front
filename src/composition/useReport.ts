import moment from "jalali-moment"
import { fetchService } from "src/boot/fetch-swagger"
import { convertMomentToDateString } from "src/utils/util"
import { userInformation } from "./useUserInformation"

export type WorkStatusDataType = {
    weekly: number
    monthly: number
    activeTasksCount

}

const { user } = userInformation()

async function getWorkStatusData() {

    const { data: monthRes } = await fetchService.report.getWorkHoursReport({
        where: {
            duration: {
                startDate: convertMomentToDateString(moment().subtract(1, "months")),
                endDate: convertMomentToDateString(moment())
            },
            operation: "avg",
            unit: 30,
            userId: user.value.userId,
        }
    })

    const { data: weekRes } = await fetchService.report.getWorkHoursReport({
        where: {
            duration: {
                startDate: convertMomentToDateString(moment().subtract(1, "weeks")),
                endDate: convertMomentToDateString(moment())
            },
            operation: "avg",
            unit: 7,
            userId: user.value.userId
        }
    })

    const { data: activeTasks } = await fetchService.task.readTask({
        where: {
            assigneeId: user.value.userId,
            isFinished: false
        }
    })
    return {
        weekly: (weekRes.data[0].value / 60).toFixed(2),
        monthly: (monthRes.data[0].value / 60).toFixed(2),
        activeTasksCount: activeTasks.count
    }
}

export function useReport() {
    return {
        getWorkStatusData
    }
}