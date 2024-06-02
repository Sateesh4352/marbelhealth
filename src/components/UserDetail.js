import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/users/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.dob}</p>
          <p>{user.contact}</p>
          <p>{user.email}</p>
          <p>{user.description}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
