import { http, HttpResponse } from 'msw'
import { TEST_SIMPLE_API, OUR_API_ADDRESS, OUR_API_ENDPOINTS } from '../API/Manager';

export const handlers = [
    // Intercept "GET ..." requests...
    http.get(OUR_API_ADDRESS + '/' + OUR_API_ENDPOINTS.AFFILIATE, (req) => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json([
        {
          id: 1,
          address: {
              street: "ул. Ангарская",
              house: "5",
              entrance: "1",
              floor: "2"
          },
          id_city: 1,
          id_company: 1
        },
        {
          id: 2,
          address: {
              street: "ул. Широтная",
              house: "15",
              entrance: "21",
              floor: "2"
          },
          id_city: 1,
          id_company: 1
      }
      ])
    })
    
  ]