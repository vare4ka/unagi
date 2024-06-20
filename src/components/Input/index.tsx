import React from 'react';
import { Field, ErrorMessage } from 'formik';

import './styles.css';

interface Props {
  name: string;
  label: string;
  type: 'text' | 'date';
}

const Input = ({ type, name, label }: Props) => {
  return (
    <div className='control'>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} />
      <ErrorMessage name={name} component='div' className='inputError'/>
    </div>

  )
};
  
export default Input;
