import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import './App.css';
import {HomePage} from "./pages/HomePage";

export const App = () => (
  <div className="wrapper">
    <h1>Flashcards @1.0.0</h1>
    <BrowserRouter>
    <nav className="nav-main">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <button>Add word</button>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  </div>
);