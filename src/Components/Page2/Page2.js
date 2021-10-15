/* import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import('../Page2/Page2.css');


function Page2(){

const serverURL = "http://localhost:5000"

function getAllUserPost (){

    return fetch (`${serverURL}/post`)
    .then((res) => res.json());
}

const [userPostStorage ,setUserPostStorage] = useState ([])

useEffect(() =>{
    getAllUserPost()
    .then(res => {
        setUserPostStorage(res)
    })
},[])


return (
        <div>
            {userPostStorage.map((lepost, id) => (
                <div key={id} >
                    <p>{lepost.author} auteur du Post</p>
                    <p>{lepost.date} la date</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    


                </div>

            ))}
            <p>ici la Page2</p>
        </div>
    )
}

export default Page2; */