import { test, expect } from "@playwright/test"

let tokenValue

test.beforeAll("Basic Auth", async ({ request }) => {
    const respToken = await request.post("https://restful-booker.herokuapp.com/auth", {
        ignoreHTTPSErrors: true,
        data: {
            username: "admin",
            password: "password123"
        }
    })
    console.log(await respToken.json());
    tokenValue = (await respToken.json()).token;
    console.log(tokenValue)
    console.log("****************************************************************")
})
test("Authentication of Delete Call using basic auth", async ({ request }) => {
    const respDelete = await request.delete("https://restful-booker.herokuapp.com/booking/1", {
        ignoreHTTPSErrors: true,
        headers: {
            Cookie: "token=" + tokenValue
        },
    })
    expect(respDelete.status()).toBe(201);
})

test("Authentication of Put Call using basic auth", async ({ request }) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        ignoreHTTPSErrors: true,
        headers: {
            Cookie: "token=" + tokenValue
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
            "additionalneeds": "Breakfast"
        }
    })
    expect(respPut.status()).toBe(200);
})

test("Authentication With API Key", async ({ request }) => {
    const resp = await request.put("https://restful-booker.herokuapp.com/booking/1", {
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
            "additionalneeds": "Breakfast"
        }
    })
    console.log(await resp.json())
    expect(resp.status()).toBe(200);
    expect(resp.statusText()).toBe("OK");
})