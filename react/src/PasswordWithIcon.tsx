import { ChangeEvent, useRef, useState } from "react"
import "./PasswordWithIcon.css"

export type PasswordWithIconProps = {
  title: string
}

const PasswordWithIcon = (props: Partial<PasswordWithIconProps>) => {
  const [iconClassName, setIconClassName] = useState<string>("fa-eye")
  const [iconTitle, setIconTitle] = useState<string>("Show password")
  const [inputType, setInputType] = useState<string>("password")
  const [text, setText] = useState<string>("")

  const input = useRef<HTMLInputElement>(null)

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const { title } = props

  const showPassword = () => {
    const txt = input.current as HTMLInputElement
    if (txt.type === "password") {
      setIconClassName("fa-eye-slash")
      setIconTitle("Hide password")
      setInputType("text")
    } else {
      setIconClassName("fa-eye")
      setIconTitle("Show password")
      setInputType("password")
    }
  }

  return (
    <div className={`login__text-row`}>
      <div className={`inline field-container-login`}>
        <input
          type={inputType}
          ref={input}
          className={`login-txt`}
          placeholder={title}
          value={text}
          onChange={onTextChange}
        />
        <span
          className={`fas ${iconClassName} toggle-password`}
          onClick={showPassword}
          title={iconTitle}
        />
      </div>
    </div>
  )
}

export default PasswordWithIcon
