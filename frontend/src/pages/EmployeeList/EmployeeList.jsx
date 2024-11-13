import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

function EmployeeList({ employees, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list-container">
      <h2 className="employee-list-header">Employee List</h2>
      <div className="add-employee">
        <h1>Total Count: {filteredEmployees.length}</h1>
        <button>
          <Link to="/employee/create">Create Employee</Link>
        </button>
      </div>
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="Enter search employee"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>
                {emp.image ? (
                  <img src={URL.createObjectURL(emp.image)} alt={emp.name} className="employee-image" />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{emp.designation}</td>
              <td>{emp.gender}</td>
              <td>{emp.course.join(', ')}</td>
              <td>{emp.createDate}</td>
              <td>
                <button className="action-button" onClick={() => onEdit(emp)}>Edit</button>
                <button className="action-button delete-button" onClick={() => onDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
