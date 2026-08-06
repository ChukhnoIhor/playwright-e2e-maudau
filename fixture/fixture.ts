import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { HotOffersPage } from '../pages/hotOffersPage';
import { ItemPage } from '../pages/itemPage';
import { BrandPage } from '../pages/BrandPage';
import { CatalogPage } from '../pages/catalogPage';
import { ProductDetailsPage } from '../pages/productDetailPage';
import { CartSidebar } from '../pages/cartSidebar';

type MyFixtures = {
  homePage: HomePage;
  hotOffersPage: HotOffersPage;
  itemPage: ItemPage;
  brandPage: BrandPage;
  catalogPage: CatalogPage;
  productDetailsPage: ProductDetailsPage;
  cartSideBar: CartSidebar;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  hotOffersPage: async ({ page }, use) => {
    await use(new HotOffersPage(page));
  },
  
  itemPage: async ({ page }, use) => {
    await use(new ItemPage(page, 'ua'));
  },
  brandPage: async ({ page }, use) => {
    await use(new BrandPage(page, 'ua'));
  },
  catalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  cartSideBar: async ({ page }, use) => {
    await use(new CartSidebar(page));
  },
});

export { expect } from '@playwright/test';