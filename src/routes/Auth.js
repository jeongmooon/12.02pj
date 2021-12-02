import { useState } from "react"
import { authService, firebaseInstance } from "../fbsae";

export default function Auth() {
    const [email, setEmail] =useState("");
    const [nEmail, setNEmail] =useState("");    
    const [password, setPassword] = useState("");
    const [nPassword, setNPassword] = useState("");
    const [error, setError] = useState("");

    //SNS가입
    const onSnsLogin = (async(event) =>{
        var provider;
        if (event.target.name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if(event.target.name ==="gitub") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if(event.target.name ==="facebook"){
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    })

    const onSubmit = (async(event)=>{
        event.preventDefault();
        console.log(event.target.id)
        try{
            var data;
            if(event.target.id === "loginForm") {
                data = await authService.signInWithEmailAndPassword(email, password);
            } else if (event.target.id === "joinUsForm") {
                data = await authService.createUserWithEmailAndPassword(nEmail, nPassword);
            }
            console.log(data);
        } catch(error) {
            console.log("error");
            setError(error.message);
        }
    })

    const onChange = function (event) {

        const {
          target: { name, value },
        } = event;
        if (name === "email") {
          setEmail(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };

    const onNChange = ((event)=>{
        const{
            target:{name, value},
        } = event;
        if (name ==="nEmail") {
            setNEmail(value);
        } else if (name === "nPassword"){
            setNPassword(value);
        }
    })

    return(      
        <div>
            <p style={{ color: "red" }}>{error}</p>  
            <h4>로그인</h4>
            <form id="loginForm" onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} />
                <input type="password" name="password" value={password} onChange={onChange} />
                <input type="submit" value="로그인" />
            </form>
            <div>
            <button name="google" onClick={onSnsLogin}>
                Google Login
            </button>
            <br />
            <button name="github" onClick={onSnsLogin}>
                GitHub Login
            </button>
            <button name="facebook" onClick={onSnsLogin}>
                FaceBook Login
            </button>
            </div>
            <hr />
            <h4>회원가입</h4>
            <form id="joinUsForm" onSubmit={onSubmit}>
                이메일 : {" "}
                <input 
                    tpye="email" 
                    name="nEmail" 
                    value={nEmail} 
                    placeholder="이메일 입력하세요"
                    onChange={onNChange}
                />
                <br />
                <input
                    type="password"
                    name="nPassword"
                    value={nPassword}
                    onChange={onNChange}
                />
                <br />
                <input type="submit" value="회원가입" />
            </form>
        </div>
    )
}