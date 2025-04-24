import React from 'react';
import './AmbulanceSignupForm.css';

const AmbulanceSignupForm = ({ formData, handleInputChange, handleSubmit, setStep }) => {
  return (
    <form onSubmit={handleSubmit} className="ambulance-form">
      <h3 className="form-title">Ambulance Service Registration</h3>

      <div className="form-group">
        <label>Service Name</label>
        <input type="text" name="serviceName" value={formData.serviceName} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Ambulance Count</label>
        <input type="number" name="ambulanceCount" value={formData.ambulanceCount} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Ambulance Type</label>
        <input type="text" name="ambulanceType" value={formData.ambulanceType} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Base Location</label>
        <input type="text" name="baseLocation" value={formData.baseLocation} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Crew Type</label>
        <input type="text" name="crewType" value={formData.crewType} onChange={handleInputChange} />
      </div>

      <div className="form-group checkbox-group">
        <input type="checkbox" id="airAmbulance" name="airAmbulance" checked={formData.airAmbulance} onChange={handleInputChange} />
        <label htmlFor="airAmbulance">Provides Air Ambulance?</label>
      </div>

      <div className="form-group">
        <label>Upload Profile Picture</label>
        <input type="file" name="profilePicture" accept="image/*" onChange={handleInputChange} />
      </div>

      <div className="form-buttons">
        <button type="button" onClick={() => setStep(1)} className="btn-secondary">Back</button>
        <button type="submit" className="btn-primary">Register</button>
      </div>
    </form>
  );
};

export default AmbulanceSignupForm;
