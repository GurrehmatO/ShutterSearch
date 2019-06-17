import { Base64 } from 'js-base64';
import getAuthParams from '../getAuthParams.util';
import { CONSUMER_KEY, CONSUMER_SECRET } from '../../constants/apiKeys';

describe('getAuthParams', () => {
  it('should return string "Basic " appended with Base64 encoding of KEY:SECRET', () => {
    expect(getAuthParams()).toEqual({
      Authorization: `Basic ${Base64.encode(`${CONSUMER_KEY}:${CONSUMER_SECRET}`)}`,
    });
  });
});
