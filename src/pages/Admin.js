import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Eliminamos el rol del localStorage
    localStorage.removeItem("role");

    // Redirigimos al login
    navigate("/");
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard de Admin</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Admin;
