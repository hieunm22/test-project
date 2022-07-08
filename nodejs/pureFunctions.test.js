const pureFunctions = require("./pureFunctions")

describe("test displayCode", () => {
  it("code returns \"red\" string", () => {
    expect(pureFunctions.displayCode(2)).toEqual("red")
  })
  it("code returns \"green\" string", () => {
    expect(pureFunctions.displayCode(4)).toEqual("green")
  })
  it("code returns \"blue\" string", () => {
    expect(pureFunctions.displayCode(8)).toEqual("blue")
  })
  it("code that throws error", () => {
    expect(() => {
      pureFunctions.displayCode(13)
    }).toThrow(Error)
    expect(() => {
      pureFunctions.displayCode(13)
    }).toThrow("Invalid code")
  })
  it("other code that throws error", () => {
    expect(() => {
      pureFunctions.displayCode(-5)
    }).toThrow(Error)
    expect(() => {
      pureFunctions.displayCode(-5)
    }).toThrow("Invalid code")
  })
})
