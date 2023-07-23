import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Browse from './components/Browse';
import {Toaster} from 'react-hot-toast';
import ListRent from './components/ListRent';
import Signup from './components/SignUp';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/browse' element={<Browse/>}/>
      <Route path='/listrent' element={<ListRent/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      
     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;