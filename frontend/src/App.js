import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./components/Home'));
const Task = lazy(() => import('./components/Task'));
const CodeEditor = lazy(() => import('./components/CodeEditor'));

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='codeEditor' element={<CodeEditor />} />
            <Route path='task' element={<Task />} />
            {/* If any route mismatches the upper 
            route endpoints then, redirect triggers 
            and redirects app to home component with to="/" */}
            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
        </Suspense>
      </Router>      
    </>
  )
}

export default App