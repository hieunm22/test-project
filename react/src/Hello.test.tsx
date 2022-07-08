import "jsdom-global/register"
import { mount, configure } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import Hello from "./Hello"

configure({ adapter: new Adapter() })

describe("Hello Testing", () => {
	let wrapper

	test("test render with name props passed", () => {
		wrapper = mount(<Hello name="hieu" />)
		let txt = wrapper.find(".container").text()
		expect(txt).toBe("hello hieu")

		wrapper = mount(<Hello name="hieu" />)
		const wrapperContainer = wrapper.find(".container")
		txt = wrapperContainer.text()
		expect(txt).toBe("hello hieu")
		expect(wrapperContainer.hasClass("container")).toBeTruthy()
	})
})
