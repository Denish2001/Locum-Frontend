import React, { useState } from 'react';
import { FaUser, FaUserMd, FaAmbulance, FaClinicMedical } from 'react-icons/fa';
import SignupComponents from '../SignupComponents/SignupComponents';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    // Common fields
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    location: '',
    bio: '',
    profilePhoto: null,
    
    // Patient specific
    dob: '',
    gender: '',
    medicalHistory: '',
    insurance: '',
    
    // Provider specific
    licenseNumber: '',
    specialty: '',
    qualification: '',
    currentFacility: '',
    yearsExperience: 0,
    county: '',
    availableForEmergency: false,
    
    // Facility specific
    facilityName: '',
    facilityType: '',
    emergencyPhone: '',
    contactPerson: '',
    address: '',
    services: [],
    bedCapacity: 0,
    hasAmbulance: false,
    
    // Ambulance specific
    serviceName: '',
    ambulanceCount: 0,
    ambulanceType: '',
    baseLocation: '',
    crewType: '',
    airAmbulance: false,
    
    // Terms
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(e.target.selectedOptions)
        .map(option => option.value);
      setFormData(prev => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic based on userType
    console.log('Submitting form for:', userType, formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="healthcare-auth__container healthcare-auth__container--signup">
      <div className="healthcare-auth__gradient-bg healthcare-auth__gradient-bg--signup"></div>
      
      <div className="healthcare-auth__card healthcare-auth__card--signup">
        {step === 1 ? (
          <>
            <div className="healthcare-auth__logo">
              <span className="healthcare-auth__logo-icon">⚕️</span>
              <h2>Join Locum</h2>
            </div>
            
            <h3 className="healthcare-auth__title">Create Your Account</h3>
            <p className="healthcare-auth__subtitle">Select your account type to get started</p>
            
            <div className="healthcare-auth__user-type-select">
              <div 
                className={`healthcare-auth__user-type ${userType === 'patient' ? 'healthcare-auth__user-type--active' : ''}`}
                onClick={() => handleUserTypeSelect('patient')}
              >
                <FaUser className="healthcare-auth__user-type-icon" />
                <h4>Patient</h4>
                <p>Access healthcare services at home or nearby facilities</p>
              </div>
              
              <div 
                className={`healthcare-auth__user-type ${userType === 'provider' ? 'healthcare-auth__user-type--active' : ''}`}
                onClick={() => handleUserTypeSelect('provider')}
              >
                <FaUserMd className="healthcare-auth__user-type-icon" />
                <h4>Healthcare Provider</h4>
                <p>Find flexible work opportunities across Kenya</p>
              </div>
              
              <div 
                className={`healthcare-auth__user-type ${userType === 'facility' ? 'healthcare-auth__user-type--active' : ''}`}
                onClick={() => handleUserTypeSelect('facility')}
              >
                <FaClinicMedical className="healthcare-auth__user-type-icon" />
                <h4>Healthcare Facility</h4>
                <p>Connect with qualified professionals when you need them</p>
              </div>
              
              <div 
                className={`healthcare-auth__user-type ${userType === 'ambulance' ? 'healthcare-auth__user-type--active' : ''}`}
                onClick={() => handleUserTypeSelect('ambulance')}
              >
                <FaAmbulance className="healthcare-auth__user-type-icon" />
                <h4>Ambulance Service</h4>
                <p>Coordinate emergency responses efficiently</p>
              </div>
            </div>
            
            <p className="healthcare-auth__switch">
              Already have an account? <a href="#login">Log in</a>
            </p>
          </>
        ) : (
          <SignupComponents 
            userType={userType}
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileChange={(e) => handleInputChange(e)} // Reuse the same handler
            setStep={setStep}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;