import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Login from "./components/login";
import HomePage from "./components/homepage";
import MakeAPost from "./components/makeAPost";
import CatPages from "./components/catPages";

function App() {

  const [isAdmin, setIsAdmin] = useState()
  const [showAdminLoginButton, setShowAdminLoginButton] = useState()
  const [myDeets, setMyDeets] = useState([])
  const [myPosts, setMyPosts] = useState([])
  const [showLogIn, setShowLogIn] = useState()


  useEffect(() => {
    authUser()
    fetchMyDeets()
    fetchMyDeets()
  },[])

  const authUser = () => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((admin) => {
          console.log('access granted')
          console.log(admin)
          updateAdmin(true);
          setShowLogIn(() => setShowLogIn(false))
          adminLogInButtonToFalse()
        });
      } else {
        console.log('not authorized')
        adminLogInButtonToTrue()
        setShowLogIn(() => setShowLogIn(true))
      }
    })
  }

  const fetchMyDeets = () => {
    fetch('/admins')
    .then(res => {
      if(res.ok){
        res.json().then((deets) => { 
          setMyDeets(deets[0])
      })
      }else {
        console.log('welp via deets')
      }
    })
  }

  const fetchMyPosts = (cat) => {
    fetch(`/${cat}_posts`)
    .then((res) => {
        if(res.ok) {
            res.json()
            .then((posts) => {
                setMyPosts(posts)
            }
        )} else {
            console.log('noooope')
        }
    })
  }

  const updateAdmin = (toWhat) => setIsAdmin(toWhat)
  const adminLogInButtonToFalse = () => setShowAdminLoginButton(false)
  const adminLogInButtonToTrue = () => setShowAdminLoginButton(true)




  return (
    <Router>
      <div className="App">

        <Navbar
          // used to show post button or not
          showLogIn={showLogIn}
        /> 


        <Routes>

          <Route exact path='/' element={
            <HomePage
              myDeets={myDeets}
              fetchMyDeets={fetchMyDeets}
            />
          }/>

          <Route exact path='/academics' element={
            <CatPages
              fetchMyPosts={() => fetchMyPosts('academics')}
              myPosts={myPosts}
              cat={'Academics'}
            />
          }/>

          <Route exact path="/perspursproj" element={
            <CatPages
              fetchMyPosts={() => fetchMyPosts('projects')}
              myPosts={myPosts}
              cat={'Personal Projects and Pursuits'}
            />
          }/>

          <Route exact path="/passions" element={
            <CatPages
              fetchMyPosts={() => fetchMyPosts('passions')}
              myPosts={myPosts}
              cat={'Passions'}
            />
          }/>

          <Route exact path="/post" element={
            <MakeAPost/>
          }/>

        </Routes>

        {showAdminLoginButton ? 

            <button onClick={adminLogInButtonToFalse}>
              Admin Login
            </button>
            
            :

            <Login
              onSetAdmin={() => setIsAdmin(true)}
              onShowAB={() => setShowAdminLoginButton(true)}
              showLogIn={showLogIn}
              setShowLogIn={setShowLogIn}
            />

        }
      
      </div>
    </Router>
  );
}

export default App;
