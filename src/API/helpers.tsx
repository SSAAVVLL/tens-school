export function fetchGetJson<Type>(prom: Promise<Response>): Promise<Type> {
    return prom.then((res) => res.json());
}