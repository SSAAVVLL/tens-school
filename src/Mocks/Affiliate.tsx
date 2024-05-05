import { http, HttpResponse } from 'msw'
import { TEST_SIMPLE_API, OUR_API_ADDRESS, OUR_API_ENDPOINTS } from '../API/API';

export const handlers = [
    // Intercept "GET ..." requests...
    http.get(OUR_API_ADDRESS + '/' + OUR_API_ENDPOINTS.AFFILIATE, (req) => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json({
        id: '150',
        name: 'Пятерочка',
        address: {
          street: 'Пушкина',
          house: '10'
        }
      })
    }),
  ]