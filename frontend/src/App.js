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
const Module = lazy(() => import('./components/Module'));
const ModuleHome = lazy(() => import('./components/ModuleHome'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/tech-playground' element={<Home />} />
            <Route path='/modules' element={<ModuleHome />} />
            <Route path='/module1' element={<Module moduleNumber={1} />} />
            <Route path='/module2' element={<Module moduleNumber={2} />} />
            <Route path='/module3' element={<Module moduleNumber={3} />} />
            <Route path='/module4' element={<Module moduleNumber={4} />} />
            {/* If any route mismatches the upper 
            route endpoints then, redirect triggers 
            and redirects app to home component with to="/" */}
            <Route path="*" element={<Navigate to="/tech-playground" />}/>
          </Routes>
        </Suspense>
      </Router>      
    </>
  )
}

export default App