import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm.tsx';
import LoginForm from './components/LoginForm.tsx';

const App: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<'signup' | 'login'>('signup');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Authentication</h1>
      <div style={{display:"flex", justifyContent:"center", gap:"1rem" }}>
        <button onClick={() => setCurrentForm('signup')} aria-label="Show Sign Up Form">
          Sign Up
        </button>
        <button onClick={() => setCurrentForm('login')} aria-label="Show Login Form">
          Login
        </button>
      </div>
      {currentForm === 'signup' ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

export default App;
