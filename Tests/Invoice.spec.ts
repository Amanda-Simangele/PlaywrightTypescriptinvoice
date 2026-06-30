import { test } from '../Fixtures/testFixture';
import { LoginData } from '../Data/LoginData';

test('create invoice', async ({ homePage, loginPage, landingPage, adminPanelPage }) => {

    await homePage.navigateToHomePage();

    await homePage.verifyLoginIsDisplayed();

    await homePage.clickLoginButton();

    await loginPage.verifyLoginPageIsDisplayed();

    await loginPage.login(
        LoginData.validUser.email,
        LoginData.validUser.password
    
    );
    await landingPage.verifyLandingText();
    await landingPage.clickMenu();
    await landingPage.clickAdminPanelButton();
    await adminPanelPage.clickInvoicesButton();
    await adminPanelPage.clickNewInvoicesButton();
    await adminPanelPage.enterClientName('Your Name Pty Ltd');

    await adminPanelPage.enterClientAddress('123 Main Street, Johannesburg');

    await adminPanelPage.addCourse();

    
});
/*
await adminPanelPage.completeCourses();

await adminPanelPage.enterDueDate('2026-06-30');

await adminPanelPage.selectPaymentStatus();

await adminPanelPage.verifyInvoiceTotal();

await adminPanelPage.clickCreateInvoiceButton();*/
