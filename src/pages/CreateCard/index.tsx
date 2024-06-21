import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import Input from '../../components/Input';
import { addToCollection, Values } from '../../lib/collection';

import './styles.css';

const initialValues = {
  firstname: '',
  lastname: '',
  birthday: '',
};

const validationSchema = () => object().shape({
  firstname: string()
    .min(2, 'Too short first name')
    .max(50, 'Too long first name')
    .required('First name is required'),
  lastname: string()
    .min(2, 'Too short last name')
    .max(50, 'Too long last name')
    .required('Last name is required'),
  birthday: string().required('Birthday is required'),
});

function redirectToCollection() {
  window.location.href = '/collection';
}

const CreateCard = () => {
  const [error, setError] = useState('');

  const submitHandler = async (values: Values) => {
    try {
      await addToCollection(values);

      redirectToCollection();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='formContainer'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            {error && <h3 className='error'>{error}</h3>}
            <Input type='text' name='firstname' label='First Name' />
            <Input type='text' name='lastname' label='Last Name' />
            <Input type='date' name='birthday' label='Birthday' />
            <button
              type='submit'
              disabled={isSubmitting}
              className='submitButton'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default CreateCard;
