import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigation
    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Click
    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    // Type text
    async fill(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    // Clear field
    async clear(locator: Locator): Promise<void> {
        await locator.clear();
    }

    // Get text
    async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) ?? "";
    }

    // Dropdown
    async selectByLabel(locator: Locator, label: string): Promise<void> {
        await locator.selectOption({ label });
    }

    // Checkbox
    async check(locator: Locator): Promise<void> {
        await locator.check();
    }

    async uncheck(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    // Waits
    async waitForVisible(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
    }

    // Assertions
    async verifyVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async verifyText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toHaveText(expectedText);
    }

    // Screenshot
    async takeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path });
    }

    // Page information
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }
}