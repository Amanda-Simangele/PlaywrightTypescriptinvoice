import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../Base/BasePage';

export class LoginPage extends BasePage {

    readonly heading: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);

        this.heading = page.getByRole('heading', {
            name: 'Train like a real test automation engineer'
        });

        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });
    }

    async verifyHomePage(): Promise<void> {
        await expect(this.heading).toBeVisible();
    }

    async clickLoginButton(): Promise<void> {
        await this.click(this.loginButton);
    }
}