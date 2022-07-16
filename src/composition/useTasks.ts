import { fetchService } from "src/boot/fetch-swagger"
import { userInformation } from "./useUserInformation"



const { user } = userInformation()

async function getReadTaskData() {
    const { data: readTaskData } = await fetchService.task.readTask({
        where: {
            assigneeId: user.value.userId,
            isFinished: false
        },
        sortBy: {
            descending: false,
            field: "deadline"
        },

    })


    return readTaskData
}

export function readTask() {
    return {
        getReadTaskData
    }
}