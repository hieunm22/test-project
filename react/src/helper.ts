/* eslint-disable max-lines */

export function isNumeric(num: number) {
  return !isNaN(num) && !num.toString().includes(".") && !num.toString().includes(",")
}

export function appendNamesFromList(list: string[]) {
  if (list.length === 0) {
    return ""
  } else if (list.length === 1) {
    return list[0]
  }
  const slice = list.slice(0, list.length - 1)
  return `${slice.join(", ")} and ${list[list.length - 1]}`
}

export function format2NumberAlways(num: number) {
  if (num >= 100 || num < 0) {
    throw new Error("Invalid input number")
  }
  return num < 10 ? `0${num}` : num.toString()
}

export function toCamelCase(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, "")
}
