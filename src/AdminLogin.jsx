import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async () => {
    if (!password) {
      setError('يرجى إدخال كلمة المرور');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (password === 'admin') {
        onLogin();
        navigate(from);
      } else {
        setError('كلمة المرور غير صحيحة');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin(); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>تسجيل الدخول</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown} 
          placeholder="أدخل كلمة المرور"
          className="input-field"
        />
        <button
          onClick={handleLogin}
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? 'جاري التحميل...' : 'تسجيل الدخول'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;