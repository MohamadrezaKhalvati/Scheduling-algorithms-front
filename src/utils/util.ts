import { Moment } from "jalali-moment"

export function convertMomentToDateString(input: Moment) {
    if (!input) return null
    return input?.clone().locale("en").format("YYYY-MM-DD")
}