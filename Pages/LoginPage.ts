import { Locator, Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // ==========================
    // Locators
    // ==========================

    get loginHeading(): Locator {
        return this.page.locator('#login-heading');
    }

    get emailTextbox(): Locator {
        return this.page.locator('#login-email');
    }

    get passwordTextbox(): Locator {
        return this.page.locator('#login-password');
    }

    get loginButton(): Locator {
        return this.page.locator('#login-submit');
    }

    // ==========================
    // Business Methods
    // ==========================

    async verifyLoginPageIsDisplayed(): Promise<void> {
        await this.basePageVerifyElementIsVisible(this.loginHeading);
    }

    async enterEmail(email: string): Promise<void> {
        await this.basePageEnterText(this.emailTextbox, email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.basePageEnterText(this.passwordTextbox, password);
    }

    async clickLoginButton(): Promise<void> {
        await this.basePageClickElement(this.loginButton);
    }

    async login(email: string, password: string): Promise<void> {

        await this.enterEmail(email);

        await this.enterPassword(password);

        await this.clickLoginButton();

    }

}