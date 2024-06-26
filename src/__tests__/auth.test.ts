import dotenv from 'dotenv';
dotenv.config();

import authApp from '../Auth';
import { test, expect } from '@playwright/test';
import http from 'http';

let server: http.Server | null  = null;

process.env.APP_URL = 'https://amazon.com';

test.beforeAll(async () => {
  server = authApp.start(3000);
});
test.afterAll(async () => {
  server?.close();
});

test.describe('Authentication services', () => {
  test('Should be able to login with username and password', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.getByPlaceholder('yours@example.com').fill('jacob@test.com');
    await page.getByPlaceholder('your password').fill('test');
    await page.getByRole('button', { name: /log in/i }).click();

    const textQuery = await page.getByLabel('Amazon', {exact: true});
    await expect(textQuery).toBeVisible();
  });
});