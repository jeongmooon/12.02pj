import { useState, useEffect } from 'react';
import '../App.css'
import Main from './Main';
import { authService } from '../fbsae';
import Footer from '../routes/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);

  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user) {
        setIsLoggedIn(user);
      } else {
        setUserObj(false);
      }
    })
  }, []);

  return (
    <div className="App">
      <Main isLoggedIn={isLoggedIn} userObj={userObj} />
      <Footer />   
    </div>  
  );
}

export default App;
