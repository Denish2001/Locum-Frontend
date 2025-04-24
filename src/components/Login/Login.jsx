import React, { useState } from 'react';
import { FaUserMd, FaAmbulance, FaClinicMedical, FaLock, FaEnvelope } from 'react-icons/fa';
import './Login.css'; // Import your CSS file
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="healthcare-auth__container">
      <div className="healthcare-auth__gradient-bg"></div>
      
      <div className="healthcare-auth__card">
        <div className="healthcare-auth__logo">
          <span className="healthcare-auth__logo-icon">⚕️</span>
          <h2>Locum</h2>
        </div>
        
        <h3 className="healthcare-auth__title">Login to Your Account</h3>
        <p className="healthcare-auth__subtitle">Bridging healthcare gaps across Kenya</p>
        
        <form onSubmit={handleSubmit} className="healthcare-auth__form">
          <div className="healthcare-auth__input-group">
            <FaEnvelope className="healthcare-auth__input-icon" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="healthcare-auth__input"
              required
            />
          </div>
          
          <div className="healthcare-auth__input-group">
            <FaLock className="healthcare-auth__input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="healthcare-auth__input"
              required
            />
          </div>
          
          <div className="healthcare-auth__options">
            <label className="healthcare-auth__remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember me</span>
            </label>
            
            <a href="#" className="healthcare-auth__forgot">Forgot password?</a>
          </div>
          
          <button type="submit" className="healthcare-auth__submit">
            Log In
          </button>
          
          <div className="healthcare-auth__divider">
            <span>or</span>
          </div>
          
          <button type="button" className="healthcare-auth__social healthcare-auth__social--google">
            Continue with Google
          </button>
          
          <p className="healthcare-auth__switch">
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
        </form>
      </div>
      
      <div className="healthcare-auth__stats">
        <div className="healthcare-auth__stat-item">
          <h4>1:16,000</h4>
          <p>Doctor to Patient Ratio</p>
        </div>
        <div className="healthcare-auth__stat-item">
          <h4>1:1,200</h4>
          <p>Nurse to Patient Ratio</p>
        </div>
        <div className="healthcare-auth__stat-item">
          <h4>70%</h4>
          <p>Rural Access Challenges</p>
        </div>
      </div>
    </div>
  );
};

export default Login;