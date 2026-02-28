import { test, expect } from "@playwright/test"

test("API Testing - Post Call 1", async ({ request }) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        ignoreHTTPSErrors: true,
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Giang",
            "lastname": "Le",
            "totalprice": 999,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Pan Cakes"
        }
    })
    const jsonResp = await respPut.json();
    console.log(jsonResp);
    expect(respPut.status()).toBe(200);
    expect(respPut.statusText()).toBe("OK")
    expect(respPut.ok()).toBeTruthy();
    expect(jsonResp).toMatchObject({
        firstname: 'Giang',
        lastname: 'Le',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Pan Cakes'
    })
    expect(jsonResp.additionalneeds).toEqual("Pan Cakes")

    // Get call to just check the Updated details.
    const resqGet = await request.get("https://restful-booker.herokuapp.com/booking/1",{
        ignoreHTTPSErrors: true,
    });
    console.log(await resqGet.json());
    expect(await resqGet.json()).toMatchObject({
        firstname: 'Giang',
        lastname: 'Le',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Pan Cakes'
    })
})
