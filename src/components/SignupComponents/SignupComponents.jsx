import React from 'react';
import PatientSignupForm from './PatientSignupForm';
import ProviderSignupForm from './ProviderSignupForm';
import FacilitySignupForm from './FacilitySignupForm';
import AmbulanceSignupForm from './AmbulanceSignupForm';

const SignupComponents = ({ userType, formData, handleInputChange, handleFileChange, handleSubmit, setStep }) => {
  const formProps = {
    formData,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    setStep
  };

  switch (userType) {
    case 'patient':
      return <PatientSignupForm {...formProps} />;
    case 'provider':
      return <ProviderSignupForm {...formProps} />;
    case 'facility':
      return <FacilitySignupForm {...formProps} />;
    case 'ambulance':
      return <AmbulanceSignupForm {...formProps} />;
    default:
      return null;
  }
};

export default SignupComponents;
