import React from 'react';

const FormSelect = ({ input, label, children, meta: { touched, error } }) => {
  return (
    <div className="fieldGroup">
      <label>{label}</label>
      <div className="inputError">
        <select {...input} className="input">
          {children}
        </select>
        {touched && error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default FormSelect;
