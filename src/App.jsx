import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <Routes>
          <Route
            path='/'
            element={user ? <Dashboard /> : <Navigate to='/login' />}
          />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to='/' />}
          />
          <Route
            path='/projects/:id'
            element={user ? <Project /> : <Navigate to='/login' />}
          />
          <Route
            path='/create'
            element={user ? <Create /> : <Navigate to='/login' />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
