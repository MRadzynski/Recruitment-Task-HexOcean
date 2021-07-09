import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let FoodForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

FoodForm = reduxForm({
  form: 'foodForm',
})(FoodForm);

const selector = formValueSelector('food');
FoodForm = connect((state) => {
  const type = selector(state, 'type');
  return {
    type,
  };
})(FoodForm);

export default FoodForm;
