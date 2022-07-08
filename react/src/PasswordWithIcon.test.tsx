/* eslint-disable max-len */
import "jsdom-global/register"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { mount, configure } from "enzyme"
import PasswordWithIcon, { PasswordWithIconProps } from "./PasswordWithIcon"

configure({ adapter: new Adapter() })

describe("PasswordWithIcon Testing", () => {
	const props: Partial<PasswordWithIconProps> = {
    title: "Password"
	}
	let wrapper: any

	// beforeEach(() => {
	// 	wrapper = mount(<PasswordWithIcon />)
	// })

	test("test mount component with all props defined", () => {
		wrapper = mount(<PasswordWithIcon {...props} />)

		// input element
		const inputElement = wrapper.find(".login-txt").getElement()
		expect(inputElement.props.placeholder).toBe("Password")
		expect(inputElement.props.autoFocus).toBeFalsy()
		expect(inputElement.props.onChange).not.toBeUndefined()
	})

	test("test mount component and click eye icon", () => {
		wrapper = mount(<PasswordWithIcon {...props} />)

		// icon element
    let icon = wrapper.find(".toggle-password")
		let iconElement = icon.getElement()
		expect(icon.hasClass("fa-eye")).toBeTruthy()
		expect(iconElement.props.title).toBe("Show password")
		icon.simulate("click")

		icon = wrapper.find(".toggle-password")
		iconElement = icon.getElement()
		expect(icon.hasClass("fa-eye-slash")).toBeTruthy()
		expect(iconElement.props.title).toBe("Hide password")
		expect(icon.hasClass("fa-eye-slash")).toBeTruthy()
		expect(icon.type()).toBe("span")
		let input = wrapper.find(".login-txt")
		let inputElement = input.getElement()
		expect(inputElement.props.type).toBe("text")
		expect(icon.html()).toContain("title=\"Hide password\"")
	})
})
