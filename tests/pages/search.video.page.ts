import { expect } from '@playwright/test';

const searchInpLocator = '//form[@action="/video/search"]//input'
const searchBtnLocator = '//form[@action="/video/search"]//button'
const searchElementLocator = `//div[contains(@class, "serp-list__items")]//div[contains(@class, "serp-list__item")]`
const videoLocatorPart = '//div[contains(@class, "thumb-preview__target")]//video'

export async function searchFor(text : string, page) {
    const searchInp = page.locator(searchInpLocator);
    await searchInp.fill(text);
    await page.locator(searchBtnLocator).click();
    await page.locator(searchElementLocator + `//*[contains(translate(text(), '${text.toUpperCase()}', '${text.toLowerCase()}'), 'ураган')]`)
    .first().waitFor();
}

export async function hoverOnSearchElement(number : number, page) {
    page.locator(searchElementLocator + `[${number}]`).hover()
}

export async function verifyThatVideoOfElementPresented(number : number, page) {
    await expect(page.locator(searchElementLocator + `[${number}]` + videoLocatorPart)).toBeVisible({timeout : 10 * 1000})
}