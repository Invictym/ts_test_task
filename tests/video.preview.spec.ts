import { test, expect } from '@playwright/test';
import { searchFor, hoverOnSearchElement, verifyThatVideoOfElementPresented } from './pages/search.video.page'

test('yandex video preview test', async ({ page }) => {
  await page.goto('https://yandex.ru/video/');

  await searchFor("ураган", page)

  let expectPromise =  verifyThatVideoOfElementPresented(1, page)
  
  hoverOnSearchElement(1, page)

  await Promise.all([expectPromise])
});
