import React from 'react';
import './PatientSignupForm.css';

const PatientSignupForm = ({ formData, handleInputChange, handleSubmit, setStep }) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Patient Registration</h2>

      <div className="photo-upload">
        <label htmlFor="profile-photo" className="photo-label">
          {formData.photo ? (
            <img src={URL.createObjectURL(formData.photo)} alt="Profile" className="profile-photo" />
          ) : (
            <span className="upload-text">Upload Photo</span>
          )}
        </label>
        <input
          type="file"
          id="profile-photo"
          name="photo"
          accept="image/*"
          onChange={handleInputChange}
          className="photo-input"
        />
      </div>

      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} required />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
      <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />

      <select name="gender" value={formData.gender} onChange={handleInputChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-Binary</option>
      </select>

      <textarea name="medicalHistory" placeholder="Medical History" value={formData.medicalHistory} onChange={handleInputChange} rows={3} />
      <input type="text" name="insurance" placeholder="Insurance Provider" value={formData.insurance} onChange={handleInputChange} />

      <label className="terms">
        <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleInputChange} required />
        <span>I accept the terms and conditions</span>
      </label>

      <div className="form-actions">
        <button type="button" onClick={() => setStep(1)} className="btn back-btn">Back</button>
        <button type="submit" className="btn submit-btn">Register</button>
      </div>
    </form>
  );
};

export default PatientSignupForm;
