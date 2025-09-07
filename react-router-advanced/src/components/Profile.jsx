import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details" style={{ marginRight: 10 }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;