/* eslint-disable @typescript-eslint/no-floating-promises */

describe('Earnings and Wallet Screen Tests', () => {
    beforeAll(async () => {
      // Launch the app before running tests
      await device.launchApp({ newInstance: true });
    });
  
    it('should display MXRF11 on Earnings screen and in Wallet', async () => {
      // Step 1: Tap on the Earnings tab
      await element(by.text('Earnings')).tap();
  
      // Step 2: Verify MXRF11 investment card is displayed on the Earnings screen
      await expect(element(by.text('MXRF11'))).toBeVisible();
  
      // Step 3: Tap on the Wallet tab
      await element(by.text('Wallet')).tap();
  
      // Step 4: Verify MXRF11 is displayed on the Wallet screen
      await expect(element(by.text('MXRF11'))).toBeVisible();
    });
  });
  