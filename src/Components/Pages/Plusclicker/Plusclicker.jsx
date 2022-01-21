import { useState } from 'react'


export const PlusclickerFunc = () => {
    const [ count, setCount ] = useState([0]);
    return (
            <div>
                <input type="button" onClick={e => setCount(e.count++)}>Klik hér</input>
                <h2>Klik og plus med 1</h2>
                <h4>Du har trykket på knappen {count} gange</h4>
            </div>
    )
}