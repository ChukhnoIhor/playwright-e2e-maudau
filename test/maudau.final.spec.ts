import { test, expect } from '../fixture/fixture';

test.describe.serial('Maudau Tests', () => {

  test('TC-1: Homepage header elements', async ({ homePage }) => {
    await homePage.open();
    await expect(homePage.logo).toBeVisible({ timeout: 10000 });
    await expect(homePage.catalogButton).toBeVisible();
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.loginButton).toBeVisible();
    await expect(homePage.favoritesButton).toBeVisible();
    await expect(homePage.cartButton).toBeVisible();
  });

  test('TC-2: Hot offers section', async ({ homePage, page }) => {
    await homePage.open();
    await homePage.scrollToHotOffers();
    await expect(homePage.hotOffersSection).toBeVisible();
    await expect(homePage.hotOffersMoreButton).toBeVisible();
    await homePage.hotOffersMoreButton.click();
    await expect(page).toHaveURL(/.*promo/, { timeout: 15000 }); 
  });

  test('TC-3: Menu categories', async ({ hotOffersPage }) => { 
    await hotOffersPage.open();
    await hotOffersPage.verifyAllCategories();
  });

  const testData = [
    { 
      name: 'Beer test (TC-4)',
      searchQuery: 'пиво', 
      brand: 'Corona', 
      check: /Corona/i 
    },
    { 
      name: 'Milk test',
      searchQuery: 'молоко', 
      brand: 'ОКЗДХ', 
      check: /ОКЗДХ/i 
    }
  ];

  for (const data of testData) {
    test(`Search & Filter: ${data.name}`, async ({ homePage, itemPage, brandPage }) => {
      await homePage.open();
      await homePage.searchFor(data.searchQuery);
      
      await itemPage.handleAgeGate();

      await brandPage.filterByBrand(data.brand);
      await itemPage.verifyResultsContain(data.check);
    });
  }
 
});