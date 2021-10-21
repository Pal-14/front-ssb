import { Link } from 'react-router-dom';
import('../Navbar/Navbar.css');


function Navbar(){
    return (
        <div className="navbarSmash">
            <p>ici la nav</p>
            <div className="nabarLinks">
                <Link to = "/">Homepage</Link>
                <Link to = "/page1">Page1</Link>
                <Link to = "/feedpost">FeedPost</Link>
            </div>
        </div>
    )
}

export default Navbar;