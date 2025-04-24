import React from 'react';
import './FacilitySignupForm.css'; // Make sure to import the CSS

const FacilitySignupForm = ({ formData, handleInputChange, handleSubmit, setStep }) => {
  return (
    <form onSubmit={handleSubmit} className="facility-form">
      <h2 className="form-title">Facility Registration</h2>

      <div className="form-group">
        <label htmlFor="facilityName">Facility Name</label>
        <input type="text" id="facilityName" name="facilityName" value={formData.facilityName}
          onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="facilityType">Facility Type</label>
        <input type="text" id="facilityType" name="facilityType" value={formData.facilityType}
          onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="emergencyPhone">Emergency Phone</label>
        <input type="tel" id="emergencyPhone" name="emergencyPhone" value={formData.emergencyPhone}
          onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="contactPerson">Contact Person</label>
        <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson}
          onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={formData.address}
          onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="bedCapacity">Bed Capacity</label>
        <input type="number" id="bedCapacity" name="bedCapacity" value={formData.bedCapacity}
          onChange={handleInputChange} required />
      </div>

      <div className="form-checkbox">
        <input type="checkbox" id="hasAmbulance" name="hasAmbulance"
          checked={formData.hasAmbulance} onChange={handleInputChange} />
        <label htmlFor="hasAmbulance">Has Ambulance?</label>
      </div>

      <div className="form-buttons">
        <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Back</button>
        <button type="submit" className="btn-primary">Register</button>
      </div>
    </form>
  );
};

export default FacilitySignupForm;
