import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Verify user can navigate to Login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate('YOUR_APPLICATION_URL');

    await loginPage.verifyHomePage();

    await loginPage.clickLoginButton();

});