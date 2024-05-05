export const TEST_SIMPLE_API = 'https://catfact.ninja/fact';

export function testRequest(): Promise<object> {
    return fetch(TEST_SIMPLE_API).then(res => {
        return res.json();
    });
}