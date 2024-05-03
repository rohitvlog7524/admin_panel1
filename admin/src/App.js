// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     /
//     </>
//   );
// }

// export default App;


import React from 'react';
import Dashboard from './components/Pages/Dashboard';
import Navbar from './components/Pages/Nav';
import Sidebar from './components/Pages/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App(){
        return (
            <div>
              <BrowserRouter>
                 <Navbar/>
               <Routes>
              
                  <Route path="/sidebar" element={  <Sidebar/>}></Route>
                  <Route path="/dashboard" element={   <Dashboard/> }></Route>
                
             

            <Route path="/" element={  <Signup/> }></Route>
            <Route path="/login" element={   <Login/> }></Route>
                
                 
                
               </Routes>
              
              </BrowserRouter>
               
                
        </div>  
        );
    }
  
export default App




