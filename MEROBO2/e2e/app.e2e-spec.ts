import { MEROBO2Page } from './app.po';

describe('merobo2 App', () => {
  let page: MEROBO2Page;

  beforeEach(() => {
    page = new MEROBO2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
