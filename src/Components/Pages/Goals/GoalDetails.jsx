import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import axios from 'axios'
// import { Link } from 'react-router-dom';


//En form for React Fetch
export const GoalDetails = () => {
    const [ goal, setGoal ] = useState({});
    const { goal_id } = useParams();
    // let history = useHistory();
    

    useEffect(() => {
        const getData = async () => {  //Fetch skal være asynkron
            const url = `https://api.mediehuset.net/sdg/goals/${goal_id}`; // Laver en variabel så jeg ikke skal skrive api mediehuset ned hele tiden
            const result = await axios.get(url)  // npm i axios = En måde at arbejde med fetch. Kan skidte "get" ud med "put"/"post" etc.
            setGoal(result.data.item)
            // console.log(result);
        }
        getData() // getData bliver kaldt
    }, [goal_id]) 

    console.log(goal);

    return (
        <>  
            <br />
            <br />
            <br />
            {/* <button onClick={history.goBack}>Gå tilbage til liste</button> */}
            <h1>{goal.title}</h1>
        </>
    )
}