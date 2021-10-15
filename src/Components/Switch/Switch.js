import { Switch, Route } from "react-router-dom"
import Homepage from "../Homepage/Homepage";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import FeedPost from "../FeedPost/FeedPost";




function Switch_ben (){
    return(
        <Switch>

            <Route exact path = "/"><Homepage/></Route>
            <Route exact path = "/page1"><Page1/></Route>
            <Route exact path = "/FeedPost"><FeedPost /></Route>
            


        </Switch>
    )
}

export default Switch_ben;