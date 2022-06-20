const axios = require('axios');

exports.handler = async function (event) {
  const { url, method, body, headers } = JSON.parse(event.body);
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_END_POINT}${encodeURI(url)}`,
      method,
      data: body,
      headers,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: res.data,
        test: 'king',
      }),
    };
  } catch (e) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        body,
        url,
        method,
        headers,
      }),
    };
  }
};
