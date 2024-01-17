import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <h1 class='center'>Welcome to the Code Adventure Tech Playground!</h1>
    
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ):(
        <div>
          <p>Here is some test data from the backend</p>
          <ul>
            {backendData.users.map((user, i) =>(
            <li key={i}>{user}</li>
          ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App