type HelloType = {
	name: string
}

export default function Hello(props: HelloType) {
	return <div className="container">hello {props.name}</div>
}
