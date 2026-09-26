import { type Page, expect } from '@playwright/test';

export class HotOffersPage {
  readonly page: Page;

  readonly expectedCategories = [
    'Топ товари',
    'Продукти і напої',
    'Алкоголь',
    'Краса і догляд',
    'Дитячі товари',
    'Зоотовари',
    'Побутова хімія',
    'Товари для дому',
    'Іграшки та творчість',
    'Дача, сад і город',
    'Електроніка',
    'Хобі та дозвілля',
    'Побутова техніка',
  ];

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/promo/gum-sale2026'); 
  }

  async verifyAllCategories() {
    for (const categoryName of this.expectedCategories) {
      
      const categoryLink = this.page.locator('a').filter({ hasText: categoryName }).first();

      await categoryLink.scrollIntoViewIfNeeded();

      await expect(categoryLink).toBeVisible();
    }
  }
}