import { test, expect } from "@playwright/test"

test("Delete Call For API Testing", async ({ request }) => {
    const respDelete = await request.delete("https://restful-booker.herokuapp.com/booking/5", {
        ignoreHTTPSErrors: true,
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
    })

    expect(respDelete.status()).toBe(201);
    const respDelText = await respDelete.text();
    expect(respDelText).toEqual("Created")

    const respGet = await request.get("https://restful-booker.herokuapp.com/booking/5",{
        ignoreHTTPSErrors: true
    })
    console.log(respGet.status())
    expect(respGet.status()).toBe(404);
})