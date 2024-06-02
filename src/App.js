import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/new" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
