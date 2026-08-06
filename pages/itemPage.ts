import { type Locator, type Page, expect } from '@playwright/test';

const TEXTS = {
  ua: { yesButton: 'Так' },
  ru: { yesButton: 'Да' }
};

export class ItemPage {
  readonly page: Page;
  readonly ageGateYesButton: Locator;
  readonly productTitles: Locator;

  constructor(page: Page, lang: 'ua' | 'ru' = 'ua') {
    this.page = page;
    const t = TEXTS[lang];

    this.ageGateYesButton = page.getByRole('button', { name: t.yesButton, exact: true });
    this.productTitles = page.getByTestId('productName');
  }

  async handleAgeGate() {
    try {
      await this.ageGateYesButton.waitFor({ state: 'visible', timeout: 10000 });
      
      // 2. Клікаємо
      await this.ageGateYesButton.click();
      
      await this.ageGateYesButton.waitFor({ state: 'hidden', timeout: 10000 });
      
    } catch (e) {
      console.log('Age gate did not appear or was not needed.');
    }
  }

  async verifyResultsContain(text: RegExp | string) {
    await expect(this.productTitles.first()).toBeVisible({ timeout: 10000 });
    await expect(this.productTitles.first()).toContainText(text);
  }
}