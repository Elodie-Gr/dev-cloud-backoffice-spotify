// Login.js
import React, {useState} from 'react';

const Login = ({onLogin}) => {
  const [otp, setOtp] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        onLogin();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Google Authenticator OTP:</label>
      <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
