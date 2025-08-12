import { useState } from "react"

export const App = () => {
	const [count, setCount] = useState(0) // [stateVariable, setterFunction]

	const eventHandler = () => {
		setCount(count + 1)
	}

	const handleOther = () => {
		setCount(count - 1)
	}
	return (
		<>
			<h1>Hello!</h1>
			<p>This is amazing</p>
			<button className="btn-secondary" onClick={eventHandler}>
				Click me!
			</button>
			<p>Count: {count}</p>
			<button className="btn-primary" onClick={handleOther}>
				No, Click ME!!!!!
			</button>
		</>
	)
}
