/* eslint-disable max-len */
import * as helper from "./helper"

describe("test isNumeric", () => {
  test("integer value should return true", () => {
    expect(helper.isNumeric(1000)).toBe(true)
  })
  test("real value should return false", () => {
    expect(helper.isNumeric(1.234)).toBe(false)
  })
  test("NaN value should return false", () => {
    expect(helper.isNumeric(NaN)).toBe(false)
  })
})

describe("test format2NumberAlways", () => {
  test("number between 0-9 shoud be padded 0 to the left", () => {
    expect(helper.format2NumberAlways(9)).toBe("09")
  })
  test("number betwwen 10-99 shoud be padded 0 to the left", () => {
    expect(helper.format2NumberAlways(15)).toBe("15")
  })
  test("number < 0 should throw an Error type with \"Invalid input number\" message", () => {
    expect(() => {
      helper.format2NumberAlways(-3)
    }).toThrow(Error)
    expect(() => {
      helper.format2NumberAlways(-3)
    }).toThrow("Invalid input number")
  })
  test("number >= 100 should have same result with negative number", () => {
    expect(() => {
      helper.format2NumberAlways(111)
    }).toThrow(Error)
    expect(() => {
      helper.format2NumberAlways(111)
    }).toThrow("Invalid input number")
  })
})

describe("test toCamelCase", () => {
  test("empty string should return itself", () => {
    expect(helper.toCamelCase("")).toBe("")
  })
  test("one-letter string should return itself", () => {
    expect(helper.toCamelCase("a")).toBe("a")
  })
  test("one-word string should return itself", () => {
    expect(helper.toCamelCase("hieunm")).toBe("hieunm")
  })
  test("one-word string with mix character and digit should return itself", () => {
    expect(helper.toCamelCase("hieunm22")).toBe("hieunm22")
  })
  test("test with two-words string, upcase the second word only", () => {
    expect(helper.toCamelCase("hello world")).toBe("helloWorld")
  })
  test("test with two-words string, seperate with \".\" character. result is same as space seperator", () => {
    expect(helper.toCamelCase("hello.world")).toBe("hello.World")
  })
  test("test with two-words string, seperate with \"_\" character should return itself", () => {
    expect(helper.toCamelCase("hello_world")).toBe("hello_world")
  })
  test("many words string, upcase each character after space", () => {
    expect(helper.toCamelCase("the quick brown fox")).toBe("theQuickBrownFox")
  })
})

describe("test appendNamesFromList", () => {
  test("empty array should return empty string", () => {
    expect(helper.appendNamesFromList([])).toBe("")
  })
  test("one-element array should return that element's value", () => {
    expect(helper.appendNamesFromList(["hieu"])).toBe("hieu")
  })
  test("two-elements array, result should have \"and\" string between them", () => {
    expect(helper.appendNamesFromList(["hieu", "cong"])).toBe("hieu and cong")
  })
  test("array with over 2 elements, result should have \",\" between elements and \"and\" string before last element", () => {
    expect(helper.appendNamesFromList(["hieu", "vu", "hoa", "minh", "doan"])).toBe("hieu, vu, hoa, minh and doan")
  })
})
