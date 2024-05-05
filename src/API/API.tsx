import {fetchGetJson as getJson} from './helpers';

export const TEST_SIMPLE_API = 'https://catfact.ninja/fact';

export function testRequest(): Promise<object> {
    return getJson(fetch(TEST_SIMPLE_API));
}

export const OUR_API_ADDRESS = 'https://someapi.com/api';

export enum OUR_API_ENDPOINTS {
    COMPANY = 'company',
    AFFILIATE = 'affiliate'
}

export function getAffiliate(id: number) {
    return getJson(fetch(OUR_API_ADDRESS + '/' + OUR_API_ENDPOINTS.AFFILIATE));
}