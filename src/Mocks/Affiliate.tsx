import { http, HttpResponse } from 'msw'
import { TEST_SIMPLE_API } from '../API';

export const handlers = [
    // Intercept "GET https://example.com/user" requests...
    http.get(TEST_SIMPLE_API, () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json({
        id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
        firstName: 'John',
        lastName: 'Maverick',
      })
    }),
  ]