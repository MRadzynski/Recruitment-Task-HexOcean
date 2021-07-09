const validate = (values) => {
  const { name, preparation_time = '', type = '' } = values;
  let transformedData = {};

  let errors = {};
  let isError = false;

  const prepTimeRegex = '^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$';

  // I left manual validation in case that we would like to validate all data on the client before sending it to the server;

  if (type === 'pizza') {
    const { no_of_slices, diameter } = values;

    // if (!no_of_slices) {
    //   errors.no_of_slices = 'Required*';
    //   isError = true;
    // }

    // if (no_of_slices && no_of_slices < 1) {
    //   errors.no_of_slices = 'Too few';
    //   isError = true;
    // }

    // if (!diameter) {
    //   errors.diameter = 'Required*';
    //   isError = true;
    // }

    // if (diameter && diameter < 1) {
    //   errors.diameter = 'Too small';
    //   isError = true;
    // }

    transformedData = {
      ...transformedData,
      no_of_slices: +no_of_slices,
      diameter: +diameter,
    };
  } else if (type === 'soup') {
    const { spiciness_scale = 0 } = values;

    // if (!spiciness_scale) {
    //   errors.spiciness_scale = 'Required*';
    //   isError = true;
    // }

    // if ((spiciness_scale && spiciness_scale > 10) || spiciness_scale < 1) {
    //   errors.spiciness_scale = 'Out of range';
    //   isError = true;
    // }

    transformedData = { ...transformedData, spiciness_scale: +spiciness_scale };
  } else if (type === 'sandwich') {
    const { slices_of_bread = 0 } = values;

    // if (!slices_of_bread) {
    //   errors.slices_of_bread = 'Required*';
    //   isError = true;
    // }

    // if (slices_of_bread && slices_of_bread < 1) {
    //   errors.slices_of_bread = 'Too few';
    //   isError = true;
    // }

    transformedData = { ...transformedData, slices_of_bread: +slices_of_bread };
  }

  // if (name.trim() === '') {
  //   errors.name = 'Required*';
  //   isError = true;
  // }

  // if (preparation_time === '') {
  //   errors.preparation_time = 'Required*';
  //   isError = true;
  // }

  // Manual check for the valid preparation time value because server accepts invalid format e.g. 31:63:63
  if (preparation_time && !preparation_time.match(prepTimeRegex)) {
    errors.preparation_time = 'Wrong format';
    isError = true;
  }

  // if (type === '') {
  //   errors.type = 'Required*';
  //   isError = true;
  // }

  transformedData = { ...transformedData, name, preparation_time, type };

  return { transformedData, errors, isError };
};

export default validate;
