import React from 'react';

const FormField = (field) => {
  const {
    label,
    input,
    type,
    meta: { touched, error },
  } = field;
  return (
    <div className="fieldGroup">
      <label>{label}</label>
      <div className="inputError">
        <input {...input} {...field} type={type} className="input" />
        {touched && error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default FormField;
