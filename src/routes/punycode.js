import punycode from 'punycode/';

export function get({ url }) {
    const domain = url.searchParams.get('domain');
    const punyEncoded = punycode.encode(domain);

    return {
        status: 200,
        body: { punyEncoded }
    };
}
