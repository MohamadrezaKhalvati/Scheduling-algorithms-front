function integer(input: string) {
    if (!input) return null
    const valid = new RegExp(/^-?(0|[1-9]\d*)$/).test(input)
    return valid || 'عدد صحیح وارد کنید'
}

function percentage(input: string) {
    if (!input) return null
    const isNumber = integer(input)
    const valid = isNumber && input <= '100' && input >= '0'
    return valid || 'درصد وارد کنید'
}

function time(input: string) {
    if (!input) return null
    const valid = new RegExp(/^([0-9]?[0-9]?[0-9]):[0-5][0-9]$/).test(input)
    return valid ? null : 'HH:MM وارد کنید'
}

function number(input: string) {
    if (!input) return null
    const valid = new RegExp(/^([0-9]*[.])?[0-9]+$/).test(input)
    return valid || 'عدد وارد کنید'
}

function email(input: string) {
    if (!input) return true
    const valid = new RegExp(/\S+@\S+\.\S+/).test(input)
    return valid || 'ایمیل وارد کنید'
}

function phoneNumber(input: string) {
    if (!input) return null
    const valid = new RegExp(/^(\+989|09)\d{9}$/).test(input)
    return valid || 'شماره موبایل صحیح وارد کنید'
}

function validSSN(input: string) {
    let result = false
    if (/^\d{10}$/.test(input)) {
        const check = parseInt(input[9])
        let sum = 0
        for (let i = 0; i < 9; ++i) {
            sum += parseInt(input[i]) * (10 - i)
        }
        sum %= 11
        result = (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)
    }

    return result || 'کد ملی صحیح وارد کنید'
}

function date(input: string) {
    if (!input) return true
    const valid = new RegExp(
        /^([0-9]{4})\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
    ).test(input)
    return valid || 'تاریخ نا معتبر است'
}

export const Validators = {
    required: (val: string) =>
        (val !== null && val !== '' && val !== undefined) ||
        'این قسمت ضروری است',
    date,
    integer,
    number,
    validSSN,
    email,
    time,
    percentage,
    phoneNumber,
}
