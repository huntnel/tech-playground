import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CodeEditor from "./components/CodeEditor";
import Home from "./components/Home";
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='codeEditor' element={<CodeEditor />} />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Router>      
    </>
  )
}

export default App