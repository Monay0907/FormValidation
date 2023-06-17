import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenum:'',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};
    const phonelength=10;
    if (formData.name === '') {
      formIsValid = false;
      newErrors.name = 'UserName is required';
    }
    if (formData.email === '') {
      formIsValid = false;
      newErrors.email = 'Email is required';
    }
    if (formData.password === '') {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }
    if (formData.confirmPassword === '') {
      formIsValid = false;
      newErrors.confirmPassword = 'Confirm Password is required';
    } 
    else if (formData.confirmPassword !== formData.password) {
      formIsValid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if(formData.phonenum==='')
    {
        formIsValid=false;
        newErrors.phonenum = 'Phone Number is required';
    }
    else if (formData.phonenum.length!==phonelength) {
        formIsValid=false;
        newErrors.phonenum = 'Invalid Length';
    }
    if(isNaN(Number(formData.phonenum)))
    {
        formIsValid=false;
        newErrors.phonenum = 'Invalid Phone Number';
    }
    setFormError(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/Welcome', { state: { formData } });
      console.log('Submitted data:', formData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="input"/>
        {formError.name}

        <label>Email Id</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="input"/>
        {formError.email}

        <label>Phone Number</label>
        <input type="text" name="phonenum" value={formData.phonenum} onChange={handleInputChange} className="input"/>
        {formError.phonenum}

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="input"/>
        {formError.password}

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="input"/>
        {formError.confirmPassword}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
