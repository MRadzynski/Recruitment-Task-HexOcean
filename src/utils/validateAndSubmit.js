import { SubmissionError } from 'redux-form';

import validate from './validate';
import submit from './submit';

const validateAndSubmit = (values) => {
  const { transformedData, errors, isError } = validate(values);

  if (isError) {
    throw new SubmissionError(errors);
  } else {
    return submit(transformedData).then((data) => {
      if (!data.hasOwnProperty('id')) {
        throw new SubmissionError({ ...data });
      }
    });
  }
};

export default validateAndSubmit;
