import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    otp: "",
  });

  const [step, setStep] = useState(1); // Step 1: Registration, Step 2: OTP Verification
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      // Send registration data
      try {
        const response = await axios.post("/api/register", {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
        });
        if (response.data.status === 1) {
          setMessage("OTP sent successfully. Please check your email.");
          setOtpSent(true);
          setStep(2);
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setMessage("An error occurred during registration.");
      }
    } else if (step === 2) {
      // Verify OTP
      try {
        const response = await axios.post("/api/register/verify", {
          otp: formData.otp,
        });
        if (response.data.status === 1) {
          setMessage("Registration successful! You can now log in.");
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setMessage("An error occurred during OTP verification.");
      }
    }
  };

  return (
    <div className="registration">
      <h2>{step === 1 ? "Register" : "Verify OTP"}</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        {step === 2 && (
          <div>
            <label>OTP:</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit">{step === 1 ? "Register" : "Verify OTP"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Registration;
