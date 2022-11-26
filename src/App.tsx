import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import './App.css';
import {HomePage} from "./pages/HomePage";
import {TestPage} from "./pages/TestPage";
import {WordAdd} from "./components/WordAdd/WordAdd";

export const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
  <div className="wrapper">
    <h1>Flashcards @1.0.0</h1>
    <BrowserRouter>
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
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
    {openModal && <WordAdd closeModal={setOpenModal}/>}
  </div>
  )
};