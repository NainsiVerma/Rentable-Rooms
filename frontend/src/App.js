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
import AddRentRoom from './components/AddRentRoom';
import ViewDetails from './components/ViewDetails';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Browse/>}/>
      <Route path='/home' element={<Browse/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/browse' element={<Browse/>}/>
      <Route path='/addroom' element={<AddRentRoom/>}/>
      <Route path='/details/:id' element={<ViewDetails/>}/>
      <Route path='/listrent' element={<ListRent/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      
     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
