import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../routes/Board";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Nav from "./Nav";


export default function Main() {
    return(
        <BrowserRouter>        
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </BrowserRouter>
    )
}