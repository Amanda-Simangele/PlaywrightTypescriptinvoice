import { test } from '../Fixtures/testFixture';
import { LoginData } from '../Data/LoginData';

test('Verify user can login successfully', async ({ homePage, loginPage }) => {

    await homePage.navigateToHomePage();

    await homePage.verifyLoginIsDisplayed();

    await homePage.clickLoginButton();

    await loginPage.verifyLoginPageIsDisplayed();

    await loginPage.login(
        LoginData.validUser.email,
        LoginData.validUser.password
    
    );

});