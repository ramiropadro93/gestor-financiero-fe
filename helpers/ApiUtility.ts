const axios = require('axios').default;

export async function getApi(url: string): Promise<any> {

  const result = await axios
    .get(url)
    .catch(async function (error: any) {
      console.log('Error ', error);
    });
  return result.data;
}

export async function putApi(
  url: string,
  body: any,
  useSpinner = true
): Promise<any> {
  let config = {
    headers: {
      useSpinner: useSpinner,
    },
  };

  const res = await axios({
    method: 'put',
    url: url,
    data: body ?? {
      title: 'Making PUT Requests with Axios',
      status: 'published',
    },
  }).catch(async function (error: any) {
    console.log('Error ', error);
  });
  return res.data;
}

export async function postApi(url: string, body: any): Promise<any> {
  const result = await axios.post(url, body).catch(async function (error: any) {
    console.log('Error ', error);
  });
  return result.data;
}

export async function postApiWithHeaders(
  url: string,
  body: any,
  headers?: any
): Promise<any> {
  let result: any;
  if (headers != undefined) {
    result = await axios.post(url, body).catch(async function (error: any) {
      console.log('Error ', error);
    });
  } else {
    result = await axios.post(url, body).catch(async function (error: any) {
      console.log('Error ', error);
    });
  }
  return result.data;
}
