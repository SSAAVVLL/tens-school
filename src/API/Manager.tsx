import {fetchGetJson as getJson} from './helpers';
import AffiliateModel, {IData as IDataAffiliate} from '../Models/Affiliate';

export const TEST_SIMPLE_API = 'https://catfact.ninja/fact';

export function testRequest(): Promise<object> {
    return getJson(fetch(TEST_SIMPLE_API));
}

export const OUR_API_ADDRESS = 'http://127.0.0.1:8888';

const endpoint = apiEndpoint(OUR_API_ADDRESS);

export enum OUR_API_ENDPOINTS {
    COMPANY = 'company',
    AFFILIATE = 'affiliate'
}

export function getAffiliate(id: number): Promise<AffiliateModel[]>  {
    return getJson<IDataAffiliate[]>(
        fetch(endpoint(OUR_API_ENDPOINTS.AFFILIATE))
    ).then((affiliates)  => {
        return affiliates.map((affiliate) => {
            return new AffiliateModel(affiliate);
        })
    });
}

export function getCompany(id: number): Promise<AffiliateModel[]>  {
    return getJson<IDataAffiliate[]>(
        fetch(endpoint(OUR_API_ENDPOINTS.COMPANY))
    ).then((affiliates)  => {
        return affiliates.map((affiliate) => {
            return new AffiliateModel(affiliate);
        })
    });
}

interface IParams {
    entity: string;
    method: string;
    id: string;
}

export function apiEndpoint(url: string) {
    return (endpoint: string) => {
        return [url, endpoint].join('/');
    }
}