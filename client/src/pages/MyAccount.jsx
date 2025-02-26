import React from 'react';
import './MyAccount.css'; // Assuming you have a CSS file for styling

const MyAccount = () => {
  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="account-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
      </div>
      <div className="account-actions">
        <button className="account-button">Edit Profile</button>
        <button className="account-button">Change Password</button>
        <button className="account-button">Logout</button>
      </div>
    </div>
  );
};

export default MyAccount;