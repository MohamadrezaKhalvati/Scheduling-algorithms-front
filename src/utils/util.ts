import deepClean from "clean-deep"
import moment from "jalali-moment"
import { ValueTypes } from "./graphql/zeus"
export function convertNullToUndefined(input: Record<string, any>) {
    return deepClean(input, { NaNValues: true })
}

export function formatDate(data: string) {
    return moment(data).locale("fa")
}

export function isObject(value) {
    return value !== null && typeof value === "object"
}

export function isFunction(value) {
    return typeof value === "function"
}

export function isString(value) {
    return typeof value === "string"
}

export function createDate(date) {
    return moment(date, "jYYYY/jMM/jDD").locale("en").format("YYYY-MM-DD")
}

export function humanFileSize(size) {
    const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
    return (
        (size / Math.pow(1024, i)).toFixed(0) +
        " " +
        ["B", "kB", "MB", "GB", "TB"][i]
    )
}

export function getAppliedFilterCount(formValue: Object) {
    let appliedFilterCount = 0
    for (const key in formValue) if (formValue[key]) ++appliedFilterCount
    return appliedFilterCount
}

export function convertToURL(text: string) {
    return text.replace(/ /g, "-")
}
export function convertToText(url: string) {
    return url.replace(/-/g, " ")
}

export function customisedListBasedOnPageSize<T>(
    arr: T[],
    innerArrayLength: number,
) {
    const result: T[][] = []
    let count = 0
    let temp: T[] = []
    for (const item of arr) {
        if (count < innerArrayLength) {
            count++
            temp.push(item)
        } else {
            result.push(temp)
            count = 1
            temp = [item]
        }
    }
    if (temp.length > 0) {
        result.push(temp)
    }
    return result
}

export function arrayToTree<T extends ArrayItem>(list: T[]) {
    const idToIndexMap = {}
    const transformedList = list.map((item, index) => {
        idToIndexMap[item.id] = index
        return {
            ...item,
            children: [],
        }
    })

    list.map(item => {
        if (item.parentId) {
            // if you have dangling branches check that map[node.parentId] exists
            transformedList[idToIndexMap[item.parentId]].children.push(item)
        }
    })
    return transformedList.filter(item => !item.parentId)
}

export function getCourseTime(videoList: any[]) {
    let hours = 0,
        minutes = 0
    for (const vid of videoList) {
        if (vid.videoTime) {
            hours += vid.videoTime ? vid.videoTime.hours : 0
            minutes += vid.videoTime ? vid.videoTime.minutes : 0
            if (minutes > 60) {
                hours += 1
                minutes -= 60
            }
        }
    }
    return { hours, minutes }
}

export function downloadFile(url: string, fileName = "") {
    const a = document.createElement("a")
    a.href = url
    a.target = "open"
    a.download = fileName || url.split("/").pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

type ArrayItem = Partial<{
    id: string | number
    parentId?: string | number
}>

type Unpromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]
type NonVoidable<T> = T extends void ? never : T

type AllTypes = ValueTypes["Query"] & ValueTypes["Mutation"]
export type FetchTypes<T extends keyof AllTypes> = AllTypes[T]

export type QueryResult<T extends (args?) => Promise<any>> = NonVoidable<
    Unpromise<ReturnType<T>>
>
export type EntityDetector<T extends (args?) => Promise<any>> = ArrayElement<
    QueryResult<T>["queryList"]
>
export type EntityInputDetector<T extends (args?) => Promise<any>> =
    Parameters<T>[0]
