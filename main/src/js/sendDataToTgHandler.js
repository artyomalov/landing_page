const sendDataToTgHandler = async (sendData) => {
  try {
    const response = await fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': 'http://localhost:8000',
      },
      mode: 'cors',
      body: JSON.stringify(sendData),
    });
    const data = await response.json();
    if (!data) {
      throw new Error('fetch error');
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};


export default sendDataToTgHandler