import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import './App.css';
import {HomePage} from "./pages/HomePage";
import {TestPage} from "./pages/TestPage";
import {WordAdd} from "./components/WordAdd/WordAdd";
import {LoginPage} from "./pages/LoginPage";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";


export const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState({});

  console.log(isLogged);

  return (
    <div className="wrapper">
      <h1>Flashcards @1.0.0</h1>
      <BrowserRouter>
        {Object.keys(isLogged).length !== 0 &&
            <nav className="nav-main">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <button onClick={() => setOpenModal(true)}>Add word</button>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                </ul>
            </nav>
        }
        <Routes>
          <Route path="/login" element={<LoginPage setIsLogged={setIsLogged}/>}/>
          <Route path='/' element={<PrivateRoute user={isLogged}/>}>
            <Route path='/' element={<HomePage/>}/>
          </Route>
          <Route path='/test' element={<PrivateRoute user={isLogged}/>}>
            <Route path='/test' element={<TestPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {openModal && <WordAdd closeModal={setOpenModal}/>}
    </div>
  )
};