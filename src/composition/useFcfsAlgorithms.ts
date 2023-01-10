import { ref } from "vue"

const processNameData = ref([])

function findWaitingTime(processes, n, bt, wt) {
    wt[0] = 0

    for (let i = 1; i < n; i++) {
        wt[i] = bt[i - 1] + wt[i - 1]
    }
}

function findTurnAroundTime(processes, n, bt, wt, tat) {
    for (let i = 0; i < n; i++) {
        tat[i] = bt[i] + wt[i]
    }
}

function findavgTime(processes, n, bt) {
    const wt = new Array(n),
        tat = new Array(n)
    for (let i = 0; i < n; i++) {
        wt[i] = 0
        tat[i] = 0
    }
    let total_wt = 0,
        total_tat = 0

    findWaitingTime(processes, n, bt, wt)

    findTurnAroundTime(processes, n, bt, wt, tat)

    document.write(
        "Processes Burst time Waiting" + " time Turn around time<br>",
    )

    for (let i = 0; i < n; i++) {
        total_wt = total_wt + wt[i]
        total_tat = total_tat + tat[i]
        document.write("    ", i + 1 + " ")
        document.write("     " + bt[i] + " ")
        document.write("     " + wt[i])
        document.write("     " + tat[i] + "<br>")
    }
    const s = total_wt / n
    const t = Math.floor(total_tat / n)
    document.write("Average waiting time = " + s)
    document.write("<br>")
    document.write("Average turn around time = ", t + " ")
}

export default function useFcfs() {
    return {
        findTurnAroundTime,
        processNameData,
        findWaitingTime,
        findavgTime,
    }
}
