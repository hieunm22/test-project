import "jsdom-global/register"
import { mount, configure } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import Counter from "./Counter"

configure({ adapter: new Adapter() })

describe("Hello Testing", () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = mount(<Counter />)
	})

	test("test click increase button", () => {
		const incrementButton = wrapper.find("#increment-btn")
		incrementButton.simulate("click")
		incrementButton.simulate("click")
		const txt = wrapper.find("#counter-value").text()
		expect(txt).toBe("2")
		expect(txt > 0).toBe(true)
	})

	test("test click decrease button", () => {
		const decrementButton = wrapper.find("#decrement-btn")
		decrementButton.simulate("click")
		decrementButton.simulate("click")
		decrementButton.simulate("click")
		const txt = wrapper.find("#counter-value").text()
		expect(txt).toBe("-3")
		expect(txt < 0).toBe(true)
	})

	test("test click both butotn", () => {
		const decrementButton = wrapper.find("#decrement-btn")
		decrementButton.simulate("click")
		decrementButton.simulate("click")
		let txt = wrapper.find("#counter-value").text()
		expect(txt).toBe("-2")
		const incrementButton = wrapper.find("#increment-btn")
		incrementButton.simulate("click")
		incrementButton.simulate("click")
		incrementButton.simulate("click")
		incrementButton.simulate("click")
		incrementButton.simulate("click")
		incrementButton.simulate("click")
		txt = wrapper.find("#counter-value").text()
		expect(txt).toBe("4")
	})
})
