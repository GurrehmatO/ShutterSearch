import { Base64 } from 'js-base64';
import { CONSUMER_KEY, CONSUMER_SECRET } from '../constants/apiKeys';

// const CONSUMER_KEY = '4e478-d840c-8731e-be6d0-4569e-ff67d';
// const CONSUMER_SECRET = '0228c-75979-0869f-96b44-6b21f-f4984';

const getAuthParams = () => {
  const basicAuth = `Basic ${Base64.encode(`${CONSUMER_KEY}:${CONSUMER_SECRET}`)}`;
  return {
    Authorization: basicAuth,
  };
};

export default getAuthParams;
