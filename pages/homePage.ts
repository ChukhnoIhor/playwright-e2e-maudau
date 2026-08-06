import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  
  readonly logo: Locator;
  readonly catalogButton: Locator;
  readonly searchInput: Locator;
  readonly loginButton: Locator;
  readonly favoritesButton: Locator;
  readonly cartButton: Locator;

  readonly hotOffersSection: Locator;
  readonly hotOffersMoreButton: Locator;

  readonly searchDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.locator('[aria-label="Логотип MAUDAU - 2"]');
    this.catalogButton = page.locator('[data-testid="catalog"]');
    this.searchInput = page.locator('[data-testid="searchInput"]');
    this.loginButton = page.locator('[data-testid="headerAuth"]');
    this.favoritesButton = page.locator('[href="/favorites"]');
    this.cartButton = page.locator('[data-testid="Cart"]');

    this.hotOffersSection = page.locator('[data-testid="topProductsSlider"]');
    this.hotOffersMoreButton = this.hotOffersSection.getByRole('link', { name: 'Більше товарів' });
    
    this.searchDropdown = page.locator('[data-testid="searchBarCategoriesContainer"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async scrollToHotOffers() {
    await this.hotOffersSection.scrollIntoViewIfNeeded();
  }

  async searchFor(text: string) {
    await this.searchInput.click();
    
    await this.searchInput.fill(text);
    
    await this.page.waitForTimeout(5000);
    
    await expect(this.searchDropdown).toBeVisible({ timeout: 10000 });

    await this.searchInput.press('Enter');
  }
}