import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLogout }) => {
  return (
    <div className="navigation-nav">
      <Link to="/dashboard" className="nav-link">Home</Link>
      <Link to="/employeelist" className="nav-link">Employee List</Link>
      <Link to="employee/create" className="nav-link">Create Employee</Link>
      <button className="nav-link logout-link" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
