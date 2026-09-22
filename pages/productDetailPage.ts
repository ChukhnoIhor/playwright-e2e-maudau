import { type Locator, type Page, expect } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  
  readonly firstProductTitle: Locator;
  readonly buyButton: Locator;
  readonly increaseQuantityButton: Locator; 
  
  constructor(page: Page) {
    this.page = page;

    this.firstProductTitle = page.getByTestId('productName').first();

    this.buyButton = page.getByTestId('productSideBlock').getByTestId('addToCartBtn');

    this.increaseQuantityButton = page.getByTestId('productSideBlock').getByTestId('plus');
  }

  async openFirstProduct() {
    await this.firstProductTitle.waitFor({ state: 'visible', timeout: 10000 });
    await this.firstProductTitle.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyCharacteristics() {
    const specs = {
        brand: this.page.getByTestId('specificationAttribute').filter({ hasText: 'Бренд' }).locator('dd, span:last-child').first(),
        diagonal: this.page.getByTestId('specificationAttribute').filter({ hasText: 'Діагональ екрана' }).first(),
        resolution: this.page.getByTestId('specificationAttribute').filter({ hasText: 'Роздільна здатність екрана' }).first(),
    };

    await expect(specs.brand).toContainText('Lenovo', { ignoreCase: true });
  }

  async verifyTabs() {
    await expect(this.page.locator('[data-testid="aboutProduct"]')).toBeVisible();
    await expect(this.page.getByTestId('specification')).toBeVisible();
    await expect(this.page.locator('[data-testid="reviews"]')).toBeVisible();
  }

  async clickBuy() {
    await this.buyButton.scrollIntoViewIfNeeded();
    await this.buyButton.click();
    await expect(this.increaseQuantityButton).toBeVisible();
  }

  async increaseQuantity() {
    await this.increaseQuantityButton.click();
    await this.page.waitForTimeout(1000); 
  }

  async verifyBuyButtonActive() {
    await expect(this.buyButton).toBeVisible();
    await expect(this.buyButton).toBeEnabled();
  }
}