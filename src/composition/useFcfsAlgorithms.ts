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

function waitingTime() {
    inputData.value.forEach((element: dataType) => {
        element.waitingTime = element.serviceTime - element.arrivalTime
    })
}

function avgWaitingTime() {
    let sum = 0
    inputData.value.forEach((element: dataType) => {
        sum = sum + element.waitingTime
    })
    const avgWaitingTime = sum / inputData.value.length
    return avgWaitingTime
}

function resposneTime() {
    // inputData.value.forEach((element: dataType) =>{
    //   element.responseTime =
    // })
}

function generateServiceTime() {
    console.log(inputData.value)
    let i, j
    for (i = 0; i <= inputData.value.length; i++) {
        if (i == 0) {
            inputData.value[i].serviceTime = 0
        } else if (i == 1) {
            inputData.value[1].serviceTime = inputData.value[0].executeTime
        } else {
            let sum = 0
            for (j = i - 1; j >= 0; j--) {
                sum = sum + inputData.value[j].executeTime
            }
            inputData.value[i].serviceTime = sum
        }
    }
    console.log(inputData.value)
}
export default function useFcfs() {
    return {
        waitingTime,
        avgWaitingTime,
        generateServiceTime,
        inputData,
    }
}
