import axios from 'axios';
import getImages from '../getImages.util';
import SEARCH from '../../constants/apiUrls';
import getAuthParams from '../getAuthParams.util';

jest.mock('axios');
axios.mockImplementation(request => request);

describe('getImages util', () => {
  it('should call axios with request', () => {
    getImages(1, 'test');
    expect(axios).toBeCalledWith({
      url: SEARCH,
      method: 'GET',
      headers: getAuthParams(),
      params: {
        query: 'test',
        page: 1,
        per_page: 12,
      },
    });
  });
});
