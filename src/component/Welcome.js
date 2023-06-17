import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Welcome() {
  const navigate=useNavigate();
  const location = useLocation();
  const formData = location.state?.formData;
    console.log(formData)
  return (
    <div className='App'>
      {formData && (
        <div>
          <h1>Welcome {formData.name}</h1>
          <h2>Your Submitted Details Are </h2>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phonenum}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
      <button onClick={()=>navigate("/Login")}>Go Back</button>
    </div>
  );
}

export default Welcome;
