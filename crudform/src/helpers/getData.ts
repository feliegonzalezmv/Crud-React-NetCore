export const getPostData = async (url = '', data: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getData = async (url = '') => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
