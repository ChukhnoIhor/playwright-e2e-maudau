import { type Locator, type Page, expect } from '@playwright/test';

export class CartSidebar {
  readonly page: Page;
  
  readonly cartIconHeader: Locator;
  readonly closeButton: Locator;
  readonly deleteButton: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartIconHeader = page.locator('[data-testid="Cart"]');
    
    this.closeButton = page.locator('[href*="cross-icon"]').last();
    this.deleteButton = page.locator('[data-testid=trashBtn]'); 
    this.emptyCartMessage = page.getByText('Кошик пустий', { exact: false });
  }
async openCart() {
    await this.cartIconHeader.click();
    await expect(this.closeButton).toBeVisible({ timeout: 10000 });
  }

  async closeCart() {
    await this.closeButton.click();
    await expect(this.closeButton).toBeHidden();
  }

  async verifyBadgeCount(count: string) {
    await this.page.waitForTimeout(2000);
    
    if (count === '0') {
        await expect(this.cartIconHeader.getByText('1')).not.toBeVisible();
    } else {
        await expect(this.cartIconHeader.getByText(count, { exact: true })).toBeVisible();
    }
  }

  async deleteItem() {
    await this.deleteButton.click();
    await expect(this.emptyCartMessage).toBeVisible();
  }
}