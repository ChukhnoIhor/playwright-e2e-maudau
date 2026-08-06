import { type Locator, type Page, expect } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  
  readonly catalogButton: Locator;
  readonly electronicsCategory: Locator;
  readonly computersCategory: Locator;
  readonly laptopsCategory: Locator;

  constructor(page: Page) {
    this.page = page;

    this.catalogButton = page.locator('[data-testid="catalog"]');
    
    this.electronicsCategory = page.locator('a[href*="/category/elektronika"]:visible').nth(2);
    this.computersCategory = page.getByRole('tab', { name: 'Ноутбуки, ПК та аксесуари' });
    this.laptopsCategory = page.getByRole('tab', { name: 'Ноутбуки', exact: true });
  }

  async openCatalog() {
    await this.catalogButton.click();
    await expect(this.electronicsCategory).toBeVisible({ timeout: 10000 });
  }

  async selectElectronics() {
    await this.electronicsCategory.click(); 
    await expect(this.computersCategory).toBeVisible();
  }

  async selectComputersAndAccessories() {
    await this.computersCategory.click();
    await expect(this.laptopsCategory).toBeVisible();
  }

  async selectLaptops() {
    await this.laptopsCategory.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}