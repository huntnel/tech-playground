import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Module = lazy(() => import('./components/Module'));
const ModuleHome = lazy(() => import('./components/ModuleHome'));


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<ModuleHome />} />
            <Route path='/module1' element={<Module moduleNumber={1} />} />
            <Route path='/module2' element={<Module moduleNumber={2} />} />
            <Route path='/module3' element={<Module moduleNumber={3} />} />
            <Route path='/module4' element={<Module moduleNumber={4} />} />
            <Route path='/module5' element={<Module moduleNumber={5} />} />
            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
        </Suspense>
      </Router>      
    </>
  )
}

export default App