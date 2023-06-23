import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';



const App = () => {
  return (
    <BrowserRouter>
      <div className="hostel-management">
        <h1 className="animate-character">Hostel Management</h1>
      </div>
      <div className="card-container">
        {/* Links for different roles */}
        <Link to="/student" className="card">
          <h2>Student</h2>
        </Link>
        <Link to="/warden" className="card">
          <h2>Warden</h2>
        </Link>
        <Link to="/faculty" className="card">
          <h2>Faculty</h2>
        </Link>
      </div>

      <Routes>
        {/* Route paths for different roles */}
        <Route path="/student" element={<LoginPage role="Student" />} />
        <Route path="/warden" element={<LoginPage role="Warden" />} />
        <Route path="/faculty" element={<LoginPage role="Faculty" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

const LoginPage = ({ role }) => {
  const [name, setName] = React.useState('');
  const [regNo, setRegNo] = React.useState('');
  const [roomDetails, setRoomDetails] = React.useState('');
  const [blockName, setBlockName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [messType, setMessType] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRegNoChange = (event) => {
    setRegNo(event.target.value);
  };

  const handleRoomDetailsChange = (event) => {
    setRoomDetails(event.target.value);
  };

  const handleBlockNameChange = (event) => {
    setBlockName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMessTypeChange = (event) => {
    setMessType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Login submitted for ${role}: name=${name}, regNo=${regNo}, roomDetails=${roomDetails}, blockName=${blockName}, password=${password}, messType=${messType}`
    );

    setTimeout(() => {
      navigate('/dashboard'); // Navigate to the /dashboard route
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="signin">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>{role} Sign In</h2>
          {role === 'Student' && (
            <>
              <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <br />
              <label>
                Reg No:
                <input type="text" value={regNo} onChange={handleRegNoChange} />
              </label>
              <br />
              <label>
                Room Details:
                <input type="text" value={roomDetails} onChange={handleRoomDetailsChange} />
              </label>
              <br />
              <label>
                Hostel Block Name:
                <input type="text" value={blockName} onChange={handleBlockNameChange} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <br />
              <label>
                Mess Type:
                <input type="text" value={messType} onChange={handleMessTypeChange} />
              </label>
              <br />
            </>
          )}
          {role === 'Warden' && (
            <>
              <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <br />
              <label>
                Hostel Block Name:
                <input type="text" value={blockName} onChange={handleBlockNameChange} />
              </label>
              <br />
              <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <br />
            </>
          )}
          {role === 'Faculty' && (
            <>
              <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <br />
              <label>
                EmpId:
                <input type="text" value={regNo} onChange={handleRegNoChange} />
              </label>
              <br />
              <label>
                isHOD:
                <input type="text" value={messType} onChange={handleMessTypeChange} />
              </label>
              <br />
            </>
          )}
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default App;
