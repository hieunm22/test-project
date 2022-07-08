import "./App.css"
import Counter from "./Counter"
import Hello from "./Hello"
import PasswordWithIcon from "./PasswordWithIcon"

function App() {
	return (
		<div className="App">
			<Counter />
			<Hello name="hieu" />
			<PasswordWithIcon title="hieunm" />
		</div>
	)
}

export default App
