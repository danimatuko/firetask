import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/projects/:id'
          element={<Project />}
        />
        <Route
          path='/create'
          element={<Create />}
        />
      </Routes>
    </div>
  );
}

export default App;
