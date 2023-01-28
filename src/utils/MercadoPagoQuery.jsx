const axios = require('axios').default;
export const createPayment = async (userId, balance) => {
    console.log(userId)
    console.log(balance)
    const url = `https://api.mercadopago.com/checkout/preferences`;

    const body = {
        items: [
            {
                title: "balance",
                quantity: 1,
                unit_price: balance
            }
        ],
        back_urls: {
            failure: "http://localhost:3000/home",
            pending: "http://localhost:3000/home",
            success: "http://localhost:3000/home"
        },
        external_reference: userId,
        auto_return: "approved",
    };

    const payment = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer TEST-1354736943950136-071221-cd6f1fabff89a8a857fb3b58688ef4a2-251379109'
        }
    });

    return payment.data;
}