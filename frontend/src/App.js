import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import EmployeeList from './pages/EmployeeList/EmployeeList.jsx';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee.jsx';
import Navigation from './components/Navigation.jsx';
import './App.css';
import EditEmployee from './components/EditEmployee.jsx';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      mobile: '123-456-7890',
      designation: 'Manager',
      gender: 'M',
      course: ['BSC'],
      createDate: '2024-01-10',
      image: null,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      mobile: '987-654-3210',
      designation: 'HR',
      gender: 'F',
      course: ['MCA'],
      createDate: '2024-02-15',
      image: null,
    },
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'alicej@example.com',
      mobile: '555-123-4567',
      designation: 'Sales',
      gender: 'F',
      course: ['BCA', 'MCA'],
      createDate: '2024-03-05',
      image: null,
    },
    {
      id: '4',
      name: 'Bob Brown',
      email: 'bobbrown@example.com',
      mobile: '444-555-6666',
      designation: 'Developer',
      gender: 'M',
      course: ['BSC', 'MCA'],
      createDate: '2024-04-20',
      image: null,
    },
  ]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const predefinedUserId = "admin";
  const predefinedPassword = "123";

  const handleLogin = (userId, password) => {
    if (userId === predefinedUserId && password === predefinedPassword) {
      setLoggedInUser(userId);
      return true;
    } else {
      alert('Invalid user ID or password');
      return false;
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const addEmployee = (employeeData) => {
    setEmployees([...employees, { ...employeeData, id: employees.length + 1 }]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="App">
      <Router>
        {loggedInUser && <Navigation onLogout={handleLogout} />}
        <Routes>
          <Route
            path="*"
            element={
              !loggedInUser ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              loggedInUser ? (
                <Dashboard username={loggedInUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/employeelist"
            element={
              loggedInUser ? (
                <EmployeeList
                  employees={employees}
                  onEdit={(emp) => setCurrentEmployee(emp)}
                  onDelete={deleteEmployee}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/employee/create"
            element={
              loggedInUser ? (
                <CreateEmployee
                  onAddEmployee={addEmployee}
                  currentEmployee={currentEmployee}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/employee/edit/:id"
            element={
              loggedInUser ? (
                <EditEmployee
                  employee={currentEmployee}
                  onUpdateEmployee={updateEmployee}
                  onClose={() => setCurrentEmployee(null)}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
