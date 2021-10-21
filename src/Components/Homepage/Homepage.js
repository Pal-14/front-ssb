import { useEffect, useState } from "react";
import ("../Homepage/Homepage.css");



function Homepage(){

const serverUrl = "http://localhost:5000"






function getAllPersos (){

    return fetch (`${serverUrl}/perso`)
    .then((res) => res.json());
}

const [persoStorage, setPersoStorage] = useState ([]) 

useEffect(() => {
    getAllPersos()
    .then(res => {
        setPersoStorage(res)
    })
},[])






    return (
        <div className="brown">
           

 

        </div>
    )
}

export default Homepage;