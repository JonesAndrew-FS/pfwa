const axios = require('axios');

const email = "ajones7@student.fullsail.edu";
const phone = "352-409-3184";
const birthday = "10/19/2001";
const password = "ItsASecretToEvery1";

test('API is reachable; running on http://localhost:3000', ()  => {
    const res = axios.get('http://localhost:3000');
    return res.then((status) => {
        expect(status).toBe(200);
    }).catch((res) => {
        expect(res.code).not.toBe('ECONNREFUSED');
    })
});

test('User singup endpoint is definied', () => {
    const res = axios.post('http://localhost:3000/signup');
    return res.catch((status) => {
        expect(status.code).not.toBe(404);
    })
});

test('User signup endpoint results in 2xx response when all valid data is submitted', () => {
    const res = axios.post('http://localhost:3000/signup', {
        email, phone, birthday, password
    });
    return res.then((res) => {
        expect(res.status).toBeGreaterThanOrEqual(200);
        expect(res.status).toBeLessThanOrEqual(299);
    });
});

// test('User signup endpoint validates email', () => {
//     const res = axios.post('http://localhost:3000/signup', {
//         phone, birthday, password
//     });
//     return res.catch((res) => {
//         expect(res.status).toBe(422);
//         expect(res.data.message).toContain('email');
//     });
// });