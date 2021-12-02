import { Link } from "react-router-dom";


export default function Nav() {
    return(
        <div className="black-nav">
            <di className="nav-sub"><Link to="/">Home</Link></di>
            <di className="nav-sub"><Link to="/board">게시판</Link></di>
            <di className="nav-sub"><Link to="/auth">회원가입</Link></di>
        </div>
    )
}