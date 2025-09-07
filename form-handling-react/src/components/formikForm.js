import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  email: Yup.string().email('Invalid email address.').required('Email is required.'),
  password: Yup.string().required('Password is required.')
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert('Registration successful!');
        setSubmitting(false);
        resetForm();
        // Simulate API call here
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
          <h2>Register (Formik)</h2>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={{ display: 'block', margin: '10px 0', width: '100%' }}
          />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          <button type="submit" disabled={isSubmitting} style={{ padding: '8px 16px' }}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;