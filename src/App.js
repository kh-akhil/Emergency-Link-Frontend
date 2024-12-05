import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to='/home' replace/> : <Login setLoggedIn={setLoggedIn}/>}/>
        <Route path="/home" element={loggedIn? <Home/> : <Navigate to="/" replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
