import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Empleado from "./pages/Empleado";
import Vigilante from "./pages/Vigilante";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) {
      navigate("/");
    } else {
      navigate(`/${role}`);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/empleado" element={<Empleado />} />
      <Route path="/vigilante" element={<Vigilante />} />
    </Routes>
  );
}

export default App;
