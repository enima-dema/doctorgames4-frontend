import { Doctorgames4Page } from './app.po';

describe('doctorgames4 App', () => {
  let page: Doctorgames4Page;

  beforeEach(() => {
    page = new Doctorgames4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
