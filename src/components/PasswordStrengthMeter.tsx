import React from 'react';

interface Props {
  password: string;
}

const PasswordStrengthMeter: React.FC<Props> = ({ password }) => {
  const calculateStrength = () => {
    if (password.length < 6) return 'Weak';
    if (/[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      return 'Strong';
    }
    return 'Moderate';
  };

  const strength = calculateStrength();
  const color = strength === 'Strong' ? 'green' : strength === 'Moderate' ? 'orange' : 'red';

  return (
    <div>
      <div style={{ color }}>{strength} Password</div>
    </div>
  );
};

export default PasswordStrengthMeter;
