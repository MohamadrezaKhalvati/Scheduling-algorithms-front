import { fetchService } from "src/boot/fetch-swagger"
import { userInformation } from "./useUserInformation"

const { user } = userInformation()

async function readTask() {

    console.log(user.value.userId)

    const { data } = await fetchService.task.readTask({
        where: {
            assigneeId: user.value.userId,
            isFinished: false,
        }
    })
    return data.data.length
}


export function useTasks() {
    return {
        readTask
    }
}