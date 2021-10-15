import { useEffect, useState } from "react";
import("../Page1/Page1.css");



function Page1(){

const serverURL = "http://localhost:5000"

function getAllUsers (){

    return fetch (`${serverURL}/users`)
    .then((res) => res.json());
}

const [userStorage, setUsersStorage] = useState ([])

useEffect(() => {
getAllUsers()
.then(res => {
    setUsersStorage(res)
})
},[])


    return (
        <div>
            {userStorage.map((utilisateur, id) => (
                <div key={id} /* className="usercard" */>
                    <p>Le prenom {utilisateur.first_name}</p>
                    <p>Le nom {utilisateur.last_name}</p>
                    <p>Ton MDP ici {utilisateur.password}***</p>

                </div>
            ))}
            <p>ici la Page1 </p>
        </div>
    )
}

export default Page1;