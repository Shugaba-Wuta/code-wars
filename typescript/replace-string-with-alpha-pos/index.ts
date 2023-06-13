function alphabetPosition(text: string) {

    return text
        .toLocaleLowerCase()
        .replace(/\s/g, "")
        .split("")
        .map((char: string) => {
            let charASCII = char.charCodeAt(0)
            let pos = char.charCodeAt(0) - 96
            if (pos > 0 && pos < 27) {
                return charASCII - 96
            }
        })
        .filter(item => { return Boolean(item) })
        .join(" ")
}
const testResult = alphabetPosition("The sunset sets at twelve o' clock.")
// console.log(testResult == "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11", `${testResult}`)
console.log(alphabetPosition(" "))
