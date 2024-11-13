import React, { useState } from 'react';
import './CreateEmployee.css'

function CreateEmployee({ onAddEmployee }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    designation: 'HR',
    gender: 'M',
    course: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'course') {
      const updatedCourses = e.target.checked
        ? [...formData.course, value]
        : formData.course.filter(course => course !== value);
      setFormData({ ...formData, course: updatedCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the add employee function
    onAddEmployee(formData);
    // Reset form after submission
    setFormData({
      id: '',
      name: '',
      email: '',
      mobile: '',
      designation: 'HR',
      gender: 'M',
      course: [],
      image: null,
    });
  };

  return (
    <div className="create-employee">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className='label-input'>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label-input'>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label-input'>
          <label>Mobile No</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label-input'>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label-input'>
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className='label-input'>
          <label>Courses</label>
          <div>
          <input
            type="checkbox"
            name="course"
            value="BTech"
            checked={formData.course.includes('BTech')}
            onChange={handleChange}
          /> BTech
          <input
            type="checkbox"
            name="course"
            value="BCA"
            checked={formData.course.includes('BCA')}
            onChange={handleChange}
          /> BCA
          <input
            type="checkbox"
            name="course"
            value="MCA"
            checked={formData.course.includes('MCA')}
            onChange={handleChange}
          /> MCA
          </div>
        </div>
        <div className='label-input'>
          <label>Image</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
