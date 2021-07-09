const submit = async (data) => {
  try {
    let res = await fetch('https://frosty-wood-6558.getsandbox.com/dishes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    let resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

export default submit;
