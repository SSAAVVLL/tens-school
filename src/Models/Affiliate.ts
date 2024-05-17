export interface IAddress {
    street: string;
    house: string;
    entrance: string;
    floor: string;
}

export interface IData {
    id: number;
    address: IAddress;
    id_city: number;
    id_company: number;
}

export default class {
    protected _data: IData;
    constructor(data: IData) {
        this._data = data;
    }

    public getAddress(): string {
        const address: IAddress = this._data.address;
        return `ул. ${address.street}, д. ${address.house} п. ${address.entrance}`;
    }
}