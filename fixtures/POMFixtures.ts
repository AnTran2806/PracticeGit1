import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";

type MyWorkerFixtures = {
    loginPage : LoginPage;
    homePage : HomePage;
    cartPage : CartPage;
}

export const test = baseTest.extend<MyWorkerFixtures>({
    loginPage : async({page}, use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage : async({page}, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    },

    cartPage : async({page}, use)=>{
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
})