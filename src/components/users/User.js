import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
      de vuelta al inicio
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">nombre: {user.name}</li>
        <li className="list-group-item">categoria: {user.username}</li>
        <li className="list-group-item">descripcion: {user.email}</li>
        <li className="list-group-item">telefono: {user.phone}</li>
        <li className="list-group-item">otros: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
