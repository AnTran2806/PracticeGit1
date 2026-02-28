import { test, request, expect } from "@playwright/test"

let reqContext2
test.beforeAll("Before All the test", async () => {
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: {
            accept: "application/json"
        }
    })
})

test("API Testing GET Practice 1", async () => {
    const resp1 = await reqContext2.get("https://restful-booker.herokuapp.com/booking", {
        headers: {
            Accept: "application/json"
        }
    });
    console.log(await resp1.json());
})

// Using base URL inside the Test
test("API Testing GET Practice 2", async () => {
    const reqContext = await request.newContext({
        ignoreHTTPSErrors: true,
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });

    const resp2 = await reqContext.get("/booking");
    console.log(await resp2.json());
})

// Using Base URL from the Hook
test("API Testing GET Practice 3", async () => {

    const resp3 = await reqContext2.get("/booking");
    console.log(await resp3.json());
})

// Using Base URL from Config File
test("API Testing GET Practice 4", async () => {
    const reqContext = await request.newContext({
        ignoreHTTPSErrors: true
    })
    const resp4 = await reqContext.get("/booking");
    console.log(await resp4.json());
})

// Get booking ID
test("API Testing GET Practice 5", async () => {

    const resp5 = await reqContext2.get("/booking/470");
    console.log(await resp5.json());
})

// Get booking ID using the name
test("API Testing GET Practice 6", async () => {

    const resp6 = await reqContext2.get("/booking?firstname=John&lastname=Smith");
    console.log(await resp6.json());
})

test("API Testing GET Practice 7", async () => {

    const resp7 = await reqContext2.get("/booking", {
        params: {
            firstname: "John",
            lastname: "Smith"
        }
    });
    console.log(await resp7.json());
})

test("API Testing GET Practice 8", async () => {
    const resp8 = await reqContext2.get("/booking/470");
    console.log(await resp8.json());
    // expect(resp8.status()).toBe(200);
    // expect(resp8.ok()).toBeTruthy();
    // expect(await resp8.json()).toMatchObject({
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     totalprice: 111,
    //     depositpaid: true,
    //     bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    //     additionalneeds: 'Breakfast'
    // })
    const jsonresp = await resp8.json()
    expect(jsonresp.firstname).toEqual("Josh")
})

test("API with UI verification", async ({request, page}) => {
  const resp9 = await request.get("https://api.demoblaze.com/entries"); 
  const jsonresp9 = await resp9.json(); 
  console.log(jsonresp9.Items[0].title)
  await page.goto("https://demoblaze.com/");
  await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsonresp9.Items[0].title)
})

