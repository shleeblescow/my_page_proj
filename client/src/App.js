import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Login from "./components/login";
import HomePage from "./components/homepage";

function App() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [showAdminLoginButton, setShowAdminLoginButton] = useState(true)
  const [myDeets, setMyDeets] = useState([])
  const [myPosts, setMyPosts] = useState([])


  useEffect(() => {
    authUser()
    fetchMyDeets()
    // fetchMyPosts()
  },[])

  const authUser = () => {
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
  }

  const fetchMyDeets = () => {
    fetch('/admins')
    .then(res => {
      if(res.ok){
        res.json().then((deets) => { 
          setMyDeets(deets)
      })
      }else {
        console.log('welp via deets')
      }
    })
  }

  // const fetchMyPosts = () => {
  //   fetch('/posts')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then((posts) => { 
  //         setMyDeets(posts)
  //     })
  //     }else {
  //       console.log('welp via posts')
  //     }
  //   })
  // }

  const updateAdmin = () => setIsAdmin(!isAdmin)
  const adminLogInButton = () => setShowAdminLoginButton(!showAdminLoginButton)




  return (
    <Router>
      <div className="App">

        <Navbar/> 


        <Routes>

          <Route exact path='/' element={
            <HomePage
              myDeets={myDeets}
              fetchMyDeets={fetchMyDeets}
            />
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

        {showAdminLoginButton ? 

            <button onClick={adminLogInButton}>
              Admin Login
            </button>
            
            :

            <Login
              onSetAdmin={() => setIsAdmin(true)}
              onShowAB={() => setShowAdminLoginButton(true)}
            />

        }
      
      </div>
    </Router>
  );
}

export default App;
