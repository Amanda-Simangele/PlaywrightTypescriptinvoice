import { Locator, Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // ==========================
    // Locators
    // ==========================


    get loginButton(): Locator {
        return this.page.getByRole('button', {
            name: 'Login'
        });
    }

    // ==========================
    // Business Methods
    // ==========================

    async navigateToHomePage(): Promise<void> {
    await this.basePageGoToUrl('/');
}

    async verifyLoginIsDisplayed(): Promise<void> {
        await this.basePageVerifyElementIsVisible(this.loginButton);
    }

    async clickLoginButton(): Promise<void> {
        await this.basePageClickElement(this.loginButton);
    }

}