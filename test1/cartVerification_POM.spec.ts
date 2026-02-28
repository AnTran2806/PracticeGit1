import { expect, test } from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";

test("Verfication on Cart", async({page})=>{
    const loginPageObj = new LoginPage(page);
    await loginPageObj.openApplication();
    await loginPageObj.login("standard_user","secret_sauce");
    const homePageObj = new HomePage(page);
    await expect(homePageObj.homePageHeading).toHaveText("Swag Labs");
    await homePageObj.backpackAddToCart();
    await expect(homePageObj.cartIcon).toHaveText("1");
    await expect(homePageObj.backpackRemoveButton).toBeVisible();
    await homePageObj.gotoCart();
    const cartPAgeObj = new CartPage(page);
    await expect(cartPAgeObj.backpackItemLink).toHaveText("Sauce Labs Backpack");
})