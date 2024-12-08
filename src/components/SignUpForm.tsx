import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PasswordStrengthMeter from './PasswordStrengthMeter.tsx';
import "./styles/signUpForm.css"

const SignUpForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const onSubmit = (values: typeof initialValues) => {
    setMessage('Sign Up Successful');
    console.log(values);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="email">Email:</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field id="password" name="password" type="password" />
              <PasswordStrengthMeter password={values.password} />
              <ErrorMessage name="password">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field id="confirmPassword" name="confirmPassword" type="password" />
              <ErrorMessage name="confirmPassword">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
      {message && <div style={{ color: 'green', marginTop: '10px' }}>{message}</div>}
    </div>
  );
};

export default SignUpForm;
