import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import FormField from '../../components/FormField/FormField';
import SelectField from '../../components/FormSelect/FormSelect';

import validateAndSubmit from '../../utils/validateAndSubmit';

import './FoodForm.styles.css';

let FoodForm = (props) => {
  const { type, handleSubmit, submitSucceeded, submitFailed } = props;

  return (
    <div className="container">
      <form
        className="foodForm"
        onSubmit={handleSubmit(validateAndSubmit)}
        noValidate
      >
        <h1 className="title">Food Form</h1>
        <div className="section">
          <Field
            className="input"
            component={FormField}
            label="Dish Name"
            name="name"
            type="text"
            placeholder="Pizza Capri"
            required
          />
          <Field
            className="input"
            component={FormField}
            label="Preparation Time"
            name="preparation_time"
            type="text"
            placeholder="00:00:00"
            required
          />
          <Field
            className="input"
            component={SelectField}
            label="Type of dish"
            name="type"
            type="select"
            required
          >
            <option />
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
        </div>
        <div className="section">
          {type === 'pizza' ? (
            <>
              <Field
                className="input"
                component={FormField}
                label="Number of slices"
                name="no_of_slices"
                type="number"
                required
              />
              <Field
                className="input"
                component={FormField}
                label="Diameter"
                name="diameter"
                type="number"
                min="0"
                step="0.1"
                required
              />
            </>
          ) : null}

          {type === 'soup' ? (
            <Field
              className="input"
              component={FormField}
              label="Spiciness scale"
              name="spiciness_scale"
              type="number"
              min="1"
              max="10"
              placeholder="(1-10)"
              required
            />
          ) : null}

          {type === 'sandwich' ? (
            <Field
              className="input"
              component={FormField}
              label="Slices of bread"
              name="slices_of_bread"
              type="number"
              required
            />
          ) : null}
        </div>
        <span
          name="message"
          className={
            submitSucceeded
              ? 'message successMessage'
              : submitFailed
              ? 'message errorMessage'
              : ''
          }
        >
          {submitSucceeded
            ? 'Data sent successfully '
            : submitFailed
            ? 'Failed to send data'
            : ''}
        </span>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

FoodForm = reduxForm({
  form: 'foodForm',
})(FoodForm);

const selector = formValueSelector('foodForm');
FoodForm = connect((state) => {
  const type = selector(state, 'type');
  return {
    type,
  };
})(FoodForm);

export default FoodForm;
