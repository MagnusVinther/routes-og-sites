   
import { useState } from 'react'

export const Greetings = () => {
	const [ name, setName ] = useState('Magnus');
	return (
		<>
			<h2>Hej mit navn er {name}</h2>
			<input type="text" placeholder="skriv dit navn her" onInput={e => setName(e.target.value)}/>
		</>
	)
}