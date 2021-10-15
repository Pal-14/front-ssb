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
           

           <div class="container">
                <div class="main">
                    <div className="one">.col-sm-6 .col-md-5 .col-lg-6</div>
                    
                    
                    
                    
                    
                    
                    <div className="two">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
                </div>
            </div>



        </div>
    )
}

export default Homepage;