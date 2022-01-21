import { useState, useEffect } from 'react';

export const Timer = () => {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 1000)
    })
    // Brackets efter } i linie 10 er et dependancy array

    return (
        <div>Timer: {count}</div>    
    )
}