import { test, request, expect } from "@playwright/test"
import { ok } from "node:assert"

let reqContext2
test.beforeAll("Before All the test", async () => {
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: {
            accept: "application/json",
            "Content-type": "application/json"
        }
    })
})

test("API Testing GET Practice 1", async () => {
    const resp1 = await reqContext2.post("/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })
    const jsonResp1 = await resp1.json();
    console.log(jsonResp1);
    // expect(resp1.status()).toBe(200);
    // expect(resp1.statusText()).toBe("OK");
    expect(resp1.ok()).toBeTruthy();
    expect(jsonResp1.booking).toMatchObject({
            firstname: 'Jim',
            lastname: 'Brown',
            totalprice: 111,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Breakfast'
    });
    expect(jsonResp1.booking.additionalneeds).toEqual("Breakfast")
})

test("API with UI Verification", async({request, page})=>{
    const resp2 = await request.post("https://api.demoblaze.com/addtocart",{
        data:{"id":"a2a1d128-2903-7a3d-b7d5-78cd9f822b54","cookie":"","prod_id":3,"flag":false}
    })
    expect(resp2.status()).toBe(200);
})