import { type Locator, type Page, expect } from '@playwright/test';

const TEXTS = {
  ua: { header: 'Бренд', placeholder: 'Пошук' },
  ru: { header: 'Бренд', placeholder: 'Поиск' }
};

export class BrandPage {
  readonly page: Page;
  readonly brandSearchInput: Locator;

  constructor(page: Page, lang: 'ua' | 'ru' = 'ua') {
    this.page = page;
    
    this.brandSearchInput = page.getByRole('textbox', { name: 'Пошук' }).nth(1);
  }

  async filterByBrand(brandName: string) {
    await expect(this.brandSearchInput).toBeVisible({ timeout: 10000 });

    await this.brandSearchInput.fill(brandName);
    
    await this.page.waitForTimeout(1000); 

    const brandCheckbox = this.page.getByText(brandName).first();
      
    await brandCheckbox.click();
      
    await this.page.waitForTimeout(3000);
  }

  async clickPopularBrandTile(brandName: string) {
    const brandTile = this.page.locator('a')
        .filter({ hasText: brandName })
        .filter({ has: this.page.locator('img') })
        .first();

    await expect(brandTile).toBeVisible();
    await brandTile.click();

    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }
}