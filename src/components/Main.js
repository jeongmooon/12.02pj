import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../routes/Board";
import Home from "../routes/Home";
import Covid from "../routes/Covid";
import Auth from "../routes/Auth";
import Nav from "./Nav";

export default function Main({isLoggedIn, userObj}) {
    return(
        <BrowserRouter>        
            <Nav isLoggedIn={isLoggedIn} />
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" element={<Home userObj={userObj} />} />
                        <Route path="/board" element={<Board />} />
                        <Route path="/covid" elemnet={<Covid />} />
                    </>
                ) : (
                    <Route path="/*" element={<Auth />} />
                )}
            </Routes>
        </BrowserRouter>
    )
}