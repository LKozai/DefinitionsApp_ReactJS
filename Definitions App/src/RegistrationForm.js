import React, { useState } from 'react';
import './css/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    DOB: '',
    city: '',
    country: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, DOB, city, country } = formData;
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || DOB.trim() === '' || city.trim() === '' || country.trim() === '') {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
      return;
    }

    if (password.trim().length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('You have successfully signed up for our word-of-the-day email list!');
    setErrorMessage('');
    setFormData({ name: '', email: '', password: '', DOB: '', city: '', country: '' });
  };

return (
  <div className="form-container">
    <h2>Sign up for our word-of-the-day email list</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name: &nbsp; </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br /><br />
        <label>Email: &nbsp;</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />
        <label>Password: &nbsp;</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br /><br />
        <label>Date of birth: &nbsp;</label>
        <input type="date" name="DOB" defaultValue="2000-01-01" value={formData.DOB} onChange={handleChange} />
        <br /><br />
        <label>City: &nbsp;</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        <br /><br />
        <label>Country: &nbsp;</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
        <br /><br />
        {/* using bootstrap for the success and error messgaes */}
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
        <br />
        {/* using bootstrap button class for the "Get Definition" button */}
        <button className="btn btn-primary" type="submit">Submit</button>
        <br /><br />
      </form>
    </div>
  );
};

export default RegistrationForm;
