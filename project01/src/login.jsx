import React, { useState } from 'react';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [marksObtained, setMarksObtained] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleRegister = () => {
    // Handle the registration logic here
    console.log('Registering with', email, password, phoneNumber, totalMarks, marksObtained, percentage);
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleTotalMarksChange = (e) => {
    setTotalMarks(e.target.value);
  };

  const handleMarksObtainedChange = (e) => {
    const value = e.target.value;
    setMarksObtained(value);
    calculatePercentage(totalMarks, value);
  };

  const calculatePercentage = (total, obtained) => {
    if (total && obtained) {
      const calculatedPercentage = (obtained / total) * 100;
      setPercentage(calculatedPercentage.toFixed(2)); // toFixed(2) to keep two decimal places
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <input
        type="number"
        placeholder="Total Marks"
        value={totalMarks}
        onChange={handleTotalMarksChange}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <input
        type="number"
        placeholder="Marks Obtained"
        value={marksObtained}
        onChange={handleMarksObtainedChange}
        style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
      />
      <p>Percentage: {percentage}%</p>
      <button onClick={handleRegister} style={{ padding: '8px 16px' }}>
        Register
      </button>
    </div>
  );
};

export default RegistrationPage;
