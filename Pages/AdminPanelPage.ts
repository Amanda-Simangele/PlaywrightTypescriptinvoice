import { Locator, Page ,expect} from '@playwright/test';
import { BasePage } from '../Base/BasePage';

export class AdminPanelPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // ==========================
    // Locators
    // ==========================


    get InvoicesButton(): Locator {
        return this.page.getByRole('button', {
            name: 'Invoices'
        });
    }

    get newInvoiceButton(): Locator {
    return this.page.getByRole('button', {
        name: 'New Invoice'
    });
    }
    get clientTextBox(): Locator {
        return this.page.getByPlaceholder('Type client name or email...');
    }

    get addressTextArea(): Locator {
        return this.page.getByPlaceholder('Enter client address...');
    }

    get addCourseButton() {  
         return this.page.getByRole('button', { name: '➕ Add Course' });

    }

    get courseDropDowns(): Locator {
        return this.page.locator('tbody select');
    }

    get descriptionTextBoxes(): Locator {
        return this.page.getByPlaceholder('Description');
    }

    get dueDateTextBox(): Locator {
        return this.page.locator('input[type="date"]');
    }

    get paymentStatusDropDown(): Locator {
        return this.page.locator('select').last();
    }

    get notesTextArea(): Locator {
        return this.page.getByPlaceholder('Additional notes...');
    }

    get invoiceTotal(): Locator {
        return this.page.locator('span').filter({ hasText: 'R' }).last();
    }

    get createInvoiceButton(): Locator {
        return this.page.getByRole('button', {
            name: 'Create Invoice'
        });
    }

    

    // ==========================
    // Business Methods
    // ==========================

    async clickInvoicesButton(): Promise<void> {
        await this.basePageClickElement(this.InvoicesButton);
    }

    async clickNewInvoicesButton(): Promise<void> {
        await this.basePageClickElement(this.newInvoiceButton);
    }

    async enterClientName(clientName: string): Promise<void> {
        await this.basePageEnterText(this.clientTextBox, clientName);
    }

    async clickFirstAddressField(): Promise<void> {
    await this.basePageClickElement(this.addressTextArea);
    }

    async enterClientAddress(address: string): Promise<void> {
    await this.basePageEnterText(this.addressTextArea, address);
   }

    async addCourse(): Promise<void> { 
     await this.addCourseButton.evaluate((btn: HTMLElement) => btn.click());
    }


}

    /* async selectCourse(index: number, course: string): Promise<void> {

        await this.courseDropDowns
            .nth(index)
            .selectOption({ label: course });

    }

    async enterDescription(index: number, description: string): Promise<void> {

        await this.descriptionTextBoxes
            .nth(index)
            .fill(description);

    }

    async completeCourses(): Promise<void> {

        const courses = [
            'Testing Course',
            'API Testing with Postman – Fundamentals',
            'Testing Course',
            'API Testing with Postman – Fundamentals'
        ];

        for (let i = 0; i < courses.length; i++) {

            await this.selectCourse(i, courses[i]);

            await this.enterDescription(
                i,
                'Automation Training'
            );

        }

    }

    async enterDueDate(date: string): Promise<void> {
        await this.basePageEnterText(this.dueDateTextBox, date);
    }

    async selectPaymentStatus(): Promise<void> {

        await this.paymentStatusDropDown.selectOption('paid');

    }

    async verifyInvoiceTotal(): Promise<void> {

        await this.basePageVerifyElementContainsText(
            this.invoiceTotal,
            '2800'
        );

    }

    async clickCreateInvoiceButton(): Promise<void> {

        await this.basePageClickElement(
            this.createInvoiceButton
        );

    }*/


