import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./styles/loginForm.css"

const LoginForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [rememberedEmail, setRememberedEmail] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setRememberedEmail(savedEmail);
    }
  }, []);

  const initialValues = {
    email: rememberedEmail || '',
    password: '',
    rememberMe: rememberedEmail !== '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = (values: typeof initialValues) => {
    if (values.rememberMe) {
      localStorage.setItem('rememberedEmail', values.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    setMessage('Login Successful');
    console.log(values);
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
            <ErrorMessage name="password">
              {msg => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <Field id="rememberMe" name="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      {message && <div style={{ color: 'green', marginTop: '10px' }}>{message}</div>}
    </div>
  );
};

export default LoginForm;
