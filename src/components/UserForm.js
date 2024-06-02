import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contact: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users', formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="dob" value={formData.dob} onChange={handleChange} placeholder="DOB" />
      <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
