import "./App.css";
import Header from "./Header";
import Context from "./checkLogin";
import { useState } from "react";
import Login from './Login'
import Dashbord from './Dashbord'
import { Routes, Route } from 'react-router-dom';
import Additem from "./Additem";
import Home from './Home'
 
function App() {

  return (
    <>
      <Context>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login />} />
              <Route path="/Dashbord" element={<Dashbord/>}/>
              {/* <Route path="/addItem" element={<Additem/>} /> */}
          </Route>
        </Routes>
      </Context>
      
    </>
  );
}

export default App;