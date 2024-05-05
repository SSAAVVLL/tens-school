export function fetchGetJson(prom: Promise<Response>): Promise<object> {
    return prom.then((res) => res.json());
}