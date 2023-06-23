import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { role } = useParams(); // Access the role from URL params

  return (
    <div>
      <h2>Dashboard</h2>
      {role === 'Student' && (
        <>
          <h3>Login/Register Page</h3>
          <h3>Apply and View Leave Page</h3>
          <h3>Apply and View Complaints Page</h3>
          <h3>Apply and View Room Details Page</h3>
          <h3>View and Register Courses Page</h3>
          <h3>Apply For Mess Page</h3>
          <h3>Post Events Page</h3>
        </>
      )}
      {role === 'Warden' && (
        <>
          <h3>Accept or Reject Leave/Complaint Page</h3>
          <h3>Accept Mess/Room Request Page</h3>
          <h3>Login/Register Page</h3>
        </>
      )}
      {role === 'Faculty' && (
        <>
          <h3>Login/Register Page</h3>
          <h3>See Courses Page</h3>
          <h3>Accept Events Page</h3>
        </>
      )}
    </div>
  );
};

export default Dashboard;
