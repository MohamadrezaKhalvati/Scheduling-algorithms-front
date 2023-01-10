import { ref } from "vue"

export type dataType = {
    processName: String
    arrivalTime: number
    executeTime: number
    serviceTime?: number
    waitingTime?: number
    responseTime?: number
}

const inputData = ref([])
const avgResponseTimeResult = ref()
const avgWaitingTimeResult = ref()

function waitingTime() {
    if (inputData.value.length == 1) {
        inputData.value[0].waitingTime = 0
    } else {
        let sum = 0
        for (let i = 0; i < inputData.value.length; i++) {
            sum += inputData.value[i].executeTime
        }
        inputData.value[inputData.value.length - 1].waitingTime =
            sum - inputData.value[inputData.value.length - 1].arrivalTime
    }
}

function avgWaitingTime() {
    generateServiceTime()
    let sum = 0
    inputData.value.forEach((element: dataType) => {
        sum = sum + element.waitingTime
    })
    const avgWaitingTime = sum / inputData.value.length
    return avgWaitingTime
}

function resposneTime() {
    inputData.value.forEach((element: dataType) => {
        element.responseTime = element.serviceTime
    })
}

function avgResponseTime() {
    let avg = 0
    inputData.value.forEach((element: dataType) => {
        avg = avg + element.responseTime
    })

    const avgResponseTime = avg / inputData.value.length
    return avgResponseTime
}
function generateServiceTime() {
    for (let i = 0; i < inputData.value.length; i++) {
        if (i == 0) {
            inputData.value[i]["serviceTime"] = 0
        } else if (i == 1) {
            inputData.value[i]["serviceTime"] =
                inputData.value[0]["executeTime"]
        } else {
            let sum = 0
            for (let j = i - 1; j >= 0; j--) {
                sum = sum + inputData.value[j].executeTime
            }
            inputData.value[i]["serviceTime"] = sum
        }
    }
}

function initialAll() {
    resposneTime()
    waitingTime()
    avgResponseTimeResult.value = avgResponseTime()
    avgWaitingTimeResult.value = avgWaitingTime()
}
export default function useFcfs() {
    return {
        initialAll,
        generateServiceTime,
        avgResponseTime,
        resposneTime,
        avgWaitingTime,
        waitingTime,
        inputData,
        avgResponseTimeResult,
        avgWaitingTimeResult,
    }
}
