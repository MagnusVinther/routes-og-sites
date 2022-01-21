import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


//En form for React Fetch
export const GoalList = () => {
    const [ goals, setGoals ] = useState([]);

    useEffect(() => {
        const getData = async () => {  //Fetch skal være asynkron
            const url = 'https://api.mediehuset.net/sdg/goals'; // Laver en variabel så jeg ikke skal skrive api mediehuset ned hele tiden
            const result = await axios.get(url)  // npm i axios = En måde at arbejde med fetch. Kan skidte "get" ud med "put"/"post" etc.
            setGoals(result.data.items); // Definerer setGoals til at være result.data.items
            // console.log(result);
        }
        getData() // getData bliver kaldt
    }, [setGoals]) //Dependancy array fungerer som en "watcher" som overvåger om setGoals bliver kørt.

    console.log(goals);

    return (
        <ul>
            {goals && goals.map(goal => {
                return (
                    <li key={goal.id}>
                        <Link to={goal.id}>
                            {goal.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}