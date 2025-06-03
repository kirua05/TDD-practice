import { test, expect } from '@playwright/test'

const targetURL ='https://www.tenlong.com.tw/'

test('測試首頁標題', async({ page }) => {
  await page.goto(targetURL)

  await expect(page).toHaveTitle(/天瓏網路書店/)
})

test('測試APP頁面', async({ page }) => {
  await page.goto(targetURL)

  await page.getByRole('link', { name: '門市資訊' }).click()
  // await page.locator('text=台北市重慶南路一段105號1樓').click()

  await expect(page).toHaveTitle('天瓏網路書店 | 聯絡我們')
})

test('搜尋關鍵字', async({ page }) => {
  await page.goto(targetURL)

  await page.getByRole('textbox', { name: 'keyword' }).fill('git')
  await page.getByRole('textbox', { name: 'keyword' }).press('enter')
  // await expect(page).toHaveTitle('天瓏網路書店 | 聯絡我們')
})