import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3001/users?page=${page}`)
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, [page]);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
};

export default UserList;
