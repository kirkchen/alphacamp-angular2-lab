import { Lab03Page } from './app.po';

describe('lab03 App', function() {
  let page: Lab03Page;

  beforeEach(() => {
    page = new Lab03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
