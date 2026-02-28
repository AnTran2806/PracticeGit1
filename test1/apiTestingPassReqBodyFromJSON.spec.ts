import { test, expect } from "@playwright/test"
import ApiJson from "../testdata/apidata.json"

test("API Testing - Pass Request body from JSON For Post Call", async ({ request }) => {
    const respPost = await request.post("https://restful-booker.herokuapp.com/booking", {
        ignoreHTTPSErrors: true,
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        data: ApiJson.postcalldata
    });
    const respJson = await respPost.json();
    console.log(respJson);
    expect(respJson.booking).toMatchObject(ApiJson.postcalldata);
    expect(respJson.booking.additionalneeds).toEqual(ApiJson.postcalldata.additionalneeds);

})

test("API Testing - Pass Request Payload from JSON For Post Call", async ({ request }) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        ignoreHTTPSErrors: true,
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: ApiJson.putcalldata
    })
    const respJson2 = await respPut.json();
    expect(respJson2).toMatchObject(ApiJson.putcalldata)
    expect(respJson2.firstname).toEqual(ApiJson.putcalldata.firstname)
})