import { Link } from "react-router-dom";
import { authService } from "../fbsae";


export default function Nav(isLoggedIn) {
    // console.log(isLoggedIn);
    return(
        <div className="black-nav">
            <ul>
                <li className="nav-sub"><Link to="/">Home</Link></li>
                <li className="nav-sub"><Link to="/board">게시판</Link></li>
                <li className="nav-sub"><Link to="/covid">코로나</Link></li>
                <li>
                    {isLoggedIn ? (
                        <button
                            onClick={function (event) {
                            authService.signOut();
                        }}>
                            로그 아웃
                        </button>
                    ) : (
                        <>로그인 되어있지 않음</>
                    )}                
                </li>
            </ul>            
        </div>
    )
}