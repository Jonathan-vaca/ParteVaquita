import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Datos de usuarios por rol
  const users = {
    admin: {
      email: "admin@example.com",
      password: "admin123",
    },
    empleado: {
      email: "empleado@example.com",
      password: "empleado123",
    },
    vigilante: {
      email: "vigilante@example.com",
      password: "vigilante123",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validamos el correo y la contraseña
    const userRole = Object.keys(users).find((role) => {
      return users[role].email === email && users[role].password === password;
    });

    if (userRole) {
      // Si el usuario existe, lo almacenamos en localStorage y redirigimos
      localStorage.setItem("role", userRole);
      navigate(`/${userRole}`);
    } else {
      // Si las credenciales son incorrectas
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
