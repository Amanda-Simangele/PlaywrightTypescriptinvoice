import { test as base } from '@playwright/test';

import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { LandingPage } from '../Pages/LandingPage';
import { AdminPanelPage } from '../Pages/AdminPanelPage';

type PageFixtures = {

    homePage: HomePage;

    loginPage: LoginPage;

    landingPage: LandingPage

    adminPanelPage: AdminPanelPage;

    


};

export const test = base.extend<PageFixtures>({

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));

    },

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    landingPage: async ({ page }, use) =>  {

        await use(new LandingPage(page));
    },

    adminPanelPage: async ({ page }, use) => {
        await use(new AdminPanelPage(page));
    }

});

export { expect } from '@playwright/test';