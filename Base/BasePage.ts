import { expect, Locator, Page } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) { }

    async basePageGoToUrl(path: string): Promise<void> {
    await this.page.goto(path);
}

    async basePageClickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    async basePageEnterText(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async basePageVerifyElementIsVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async basePageVerifyElementContainsText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toContainText(expectedText);
    }

    async basePageGetText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }

    async basePageSelectDropdownByLabel(locator: Locator, label: string): Promise<void> {
        await locator.selectOption({ label });
    }

    async basePageCheckCheckbox(locator: Locator): Promise<void> {
        await locator.check();
    }

    async basePageUncheckCheckbox(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    async basePageTakeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path });
    }

    async basePageGetTitle(): Promise<string> {
        return await this.page.title();
    }

    async basePageGetCurrentUrl(): Promise<string> {
        return this.page.url();
    }
}