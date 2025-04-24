import React, { useRef, useState } from 'react';
import './ProviderSignupForm.css'; // Assuming you have a CSS file for styles
import { FaUserMd } from 'react-icons/fa'; // Importing an icon for the provider signup form

const ProviderSignupForm = ({ formData, handleInputChange, handleSubmit, setStep }) => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="neo-form-container">
      <form onSubmit={handleSubmit} className="neo-form">
        <h3 className="neo-form-title">Provider Registration</h3>

        <div className="neo-avatar-upload" onClick={triggerFileInput}>
          {previewImage ? (
            <div className="neo-avatar-preview" style={{ backgroundImage: `url(${previewImage})` }} />
          ) : (
            <div className="neo-avatar-placeholder">
              <svg className="neo-upload-icon" viewBox="0 0 24 24">
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
              <span>Upload Profile</span>
            </div>
          )}
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="neo-file-input"
          />
        </div>

        <div className="neo-form-grid">
          <div className="neo-input-group">
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleInputChange} 
              className="neo-input"
              required 
            />
            <label className="neo-label">Full Name</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange} 
              className="neo-input"
              required 
            />
            <label className="neo-label">Email</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="text" 
              name="licenseNumber" 
              value={formData.licenseNumber}
              onChange={handleInputChange} 
              className="neo-input"
            />
            <label className="neo-label">License Number</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="text" 
              name="specialty" 
              value={formData.specialty}
              onChange={handleInputChange} 
              className="neo-input"
            />
            <label className="neo-label">Specialty</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="text" 
              name="qualification" 
              value={formData.qualification}
              onChange={handleInputChange} 
              className="neo-input"
            />
            <label className="neo-label">Qualification</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="text" 
              name="currentFacility" 
              value={formData.currentFacility}
              onChange={handleInputChange} 
              className="neo-input"
            />
            <label className="neo-label">Current Facility</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="number" 
              name="yearsExperience" 
              value={formData.yearsExperience}
              onChange={handleInputChange} 
              className="neo-input"
            />
            <label className="neo-label">Years of Experience</label>
            <span className="neo-input-highlight"></span>
          </div>

          <div className="neo-input-group">
            <input 
              type="text" 
              name="county" 
              value={formData.county}
              onChange={handleInputChange} 
              className="neo-input"
            />
            <label className="neo-label">County</label>
            <span className="neo-input-highlight"></span>
          </div>
        </div>

        <label className="neo-checkbox">
          <input 
            type="checkbox" 
            name="availableForEmergency" 
            checked={formData.availableForEmergency}
            onChange={handleInputChange} 
            className="neo-checkbox-input"
          />
          <span className="neo-checkbox-custom"></span>
          <span className="neo-checkbox-label">Available for Emergency?</span>
        </label>

        <div className="neo-form-actions">
          <button type="button" onClick={() => setStep(1)} className="neo-btn neo-btn-secondary">
            Back
          </button>
          <button type="submit" className="neo-btn neo-btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProviderSignupForm;