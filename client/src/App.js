import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Login from "./components/login";

function App() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [showLogIn, setShowLogIn] = useState(false)

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((admin) => {
          console.log('access granted')
          console.log(admin)
          updateAdmin();
        });
      } else {
        console.log('not authorized')
      }
    })
  },[])

  const updateAdmin = () => setIsAdmin(true)
  const adminLogInButton = () => setShowLogIn(true)


  return (
    <Router>
      <div className="App">

        <Navbar/> 


        <Routes>

        <Route exact path='/' element={
            <h2>i'm like so cool look how cool i amv</h2>
          }/>

          <Route exact path='/academics' element={
            <h2>yeah i wwent to sschoolg</h2>
          }/>

          <Route exact path="/perspursproj" element={
            <h1>i pretnded to fix a mustang and paid to fly</h1>
          }/>

          <Route exact path="/passions" element={
            <h1>i run cause i'm insecure and hate myself</h1>
          }/>

        </Routes>

        {showLogIn ? 

            <Login
              onSetAdmin={() => setIsAdmin(true)}
              onSetShowLogin={() => setShowLogIn(false)}
            />

          :

              <button onClick={adminLogInButton}>
                  Admin Login
              </button>

        }
      
      </div>
    </Router>
  );
}

export default App;
