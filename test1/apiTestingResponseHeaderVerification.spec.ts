import {test, expect} from "@playwright/test"

test("Fetch and Validate Response Header", async({request})=>{
    const getResponse = await request.get("https://restful-booker.herokuapp.com/booking/1",{
        ignoreHTTPSErrors: true
    })
    const headerValue = getResponse.headers()
    console.log(headerValue)
    expect(headerValue.server).toEqual("Heroku")
    expect(headerValue["x-powered-by"]).toEqual("Express")

    console.log("************************************************************************************")

    const headersArrayValues = getResponse.headersArray();
    console.log(headersArrayValues);
    expect(headersArrayValues.length).toBe(10)
    headersArrayValues.forEach((header)=>{
        console.log(header.name + "::" + header.value)
    })
})