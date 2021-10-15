import { useEffect, useState } from "react";
import Marquee from "../Marquee/Marquee";
import("../FeedPost/FeedPost.css");

 function FeedPost(props) {
  const serverURL = "http://localhost:5000";

  function getAllUserPost() {
    return fetch(`${serverURL}/post`).then((res) => res.json());
  }

  const [userPostStorage, setUserPostStorage] = useState([]);

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    getAllUserPost().then((res) => {
      setUserPostStorage(res);
    });
  }, []);

  return (
    <div classname="cardToRight">
      <div classname="homePageHero">
        {<img className="imgOne" src="imagep.png" />}

        <div className="titleFeed">
          <h4 classname="titleh1">Accueil</h4>
          <h1 classname="titleh4">Bienvenue au Pays</h1>
          <h2><Marquee />{userPostStorage.length} posts</h2>
        </div>
      </div>

      <section>
        <div className="formA4"><br/>
        
                <div className="container">
                        {userPostStorage.map((utilisateur,id)=>(

                            <div key={id} className="userCard">
                            <div className="image"> <img src="yoshi.png" alt ="" /></div>

                            <div className="text">
                                <h3 className="h3">{utilisateur.first_name}</h3>
                                <h4>{utilisateur.last_name}</h4>    
                            </div>
                            <div className="bottomButton">
                                <button className="button" > Ecrire un post </button>
                            </div>
                            </div>

                        ))}


                    </div></div>
      </section>

      <div className="containerCardFeed">
        {userPostStorage.map((lepost, id) => (
          <div key={id} className="cardFeed">
            <div className="cardPartOne">
              <img className="imgTwo" src="apple-icon-57x57.png" />
              <p>
                <span>{lepost.author}</span>
              </p>
              <p> {/* {lepost.date} */} Il y a 12 heures.</p>
              {/* mettre la date dans la V2 */}
            </div>

            <div className="cardPartTwo">
              <p>{lepost.title}</p>
              <p>{lepost.content}</p>
              <p className="nbLike">Vous avez {likes} Likes </p>
            </div>

            <div className="cardPartThree">
              <button
                className="commentButton"
                onClick={() => setLikes(likes + 1)}
              >
                A
              </button>

              <p className="spaceTextButton">Press A to Like</p>
              <button className="addLikeButton" name=" add-like" type="submit">
                B
              </button>
              <p className="spaceTextButton">Press B to Comment</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedPost;
