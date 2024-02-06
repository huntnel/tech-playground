import React from 'react';
// import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
function Home() {
    // const [backendData, setBackendData] = useState([{}]);

    // useEffect(() => {
    //   fetch("/api").then(
    //     response => response.json()
    //   ).then(
    //     data => {
    //       setBackendData(data)
    //     }
    //   )
    // }, []);

    // (typeof backendData.users === 'undefined') ? (
    //     <p>Loading...</p>
    //     ):(
    //     <div>
    //         <p>Here is some test data from the backend</p>
    //         <ul>
    //         {backendData.users.map((user, i) =>(
    //         <li key={i}>{user}</li>
    //         ))}
    //         </ul>
    //     </div>
    //     );
    
  return <div><h1 className='center'>Welcome to the Code Adventure Tech Playground!</h1>
  <ul>
    <li>
        {/* Endpoint to route to Home component */}
        <Link to="/">Home</Link>
    </li>
    <li>
        {/* Endpoint to route to About component */}
        <Link to="/task">Tech Playground</Link>
    </li>
  </ul>
  </div>;
}

export default Home;