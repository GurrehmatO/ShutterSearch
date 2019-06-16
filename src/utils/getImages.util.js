import axios from 'axios';
import getAuthParams from './getAuthParams.util';
import SEARCH from '../constants/apiUrls';

const headers = getAuthParams();
const getImages = (page, query) => {
  const request = {
    url: SEARCH,
    method: 'GET',
    headers,
    params: {
      query,
      page,
      per_page: 12,
    },
  };
  return axios(request);
};

export default getImages;
