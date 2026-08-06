import { test } from '../fixture/fixture';

test.describe('E2E Scenarios', () => {

  test('TC-5: Buying laptop flow (Catalog -> Filter -> Cart)', async ({ 
    homePage, 
    catalogPage, 
    brandPage, 
    productDetailsPage, 
    cartSideBar 
  }) => {
    
    await homePage.open();

    await catalogPage.openCatalog();
    await catalogPage.selectElectronics();
    await catalogPage.selectComputersAndAccessories();
    await catalogPage.selectLaptops();

    await brandPage.clickPopularBrandTile('Lenovo');

    await productDetailsPage.openFirstProduct();

    await productDetailsPage.verifyCharacteristics();
    await productDetailsPage.verifyTabs();

    await productDetailsPage.clickBuy();

    await cartSideBar.verifyBadgeCount('1');

    await productDetailsPage.increaseQuantity();
    await cartSideBar.verifyBadgeCount('2'); 

    await cartSideBar.openCart();

    await cartSideBar.closeCart();

    await cartSideBar.openCart();

    await cartSideBar.deleteItem();

    await cartSideBar.closeCart();

    await cartSideBar.verifyBadgeCount('0');

    await productDetailsPage.verifyBuyButtonActive();
  });

});