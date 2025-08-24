import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Controlled Component Form</h1>
      <RegistrationForm />
      <h1 className="text-2xl font-bold mb-4 mt-8">Formik Form</h1>
      <FormikForm />
    </div>
  );
};

export default App;
