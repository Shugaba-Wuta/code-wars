const TIME_UNITS = ["year", "day", "hour", "minute", "second"]

function formatDuration(seconds: number) {
    if (seconds == 0) return "now"
    let timeFactor = 60 * 60 * 24 * 365
    // Gets the [years, days, hours, minutes] as an array and appends remaining seconds to the array
    const timeArray: number[] | string[] = [365, 24, 60, 60].map((item) => {
        if (timeFactor <= seconds) {
            let val = parseInt(`${seconds / timeFactor}`)
            seconds -= val * timeFactor
            timeFactor /= item
            return val
        }
        timeFactor /= item
        return 0


    })
    timeArray.push(seconds)

    // Creates the corresponding timeAnnotatedArray from the timeArray.
    const timeAnnotatedArray: string[] = []
    TIME_UNITS.forEach((item: string, index: number) => {
        let val = timeArray[index]
        if (val <= 0) return
        if (val > 1) item = item + "s"
        timeAnnotatedArray.push(val + " " + item)

    })
    // Adds "and" to the last element of the array for 2 or more elements
    if (timeAnnotatedArray.length > 1) timeAnnotatedArray[timeAnnotatedArray.length - 1] = "and " + timeAnnotatedArray[timeAnnotatedArray.length - 1]
    //Replaces the last ", and" with "and"
    return timeAnnotatedArray.join(", ").replace(", and", " and")

}
console.log(formatDuration(60 * 60))
