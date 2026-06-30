import { Locator, Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage';

export class LandingPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    // ==========================
    // Locators
    // ==========================
    
    get workingTodayText(): Locator {
    return this.page.getByText("Here's who's working today");
    }

    get menuButton(): Locator {
    return this.page.getByRole('button', { name: 'Menu' });
    }

    get adminPanelButton(): Locator {
    return this.page.getByRole('button', { name: 'Admin Panel' });
    }

    // ==========================
    // Business Methods
    // ==========================

    async verifyLandingText(): Promise<void> {
        await this.basePageVerifyElementIsVisible(this.workingTodayText);
    }

    async clickMenu(): Promise<void> {
        await this.basePageClickElement(this.menuButton)
    }

    async clickAdminPanelButton(): Promise<void> {
        await this.basePageClickElement(this.adminPanelButton)
    }



}