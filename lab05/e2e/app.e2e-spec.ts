import { Lab04Page } from './app.po';

describe('lab05 App', function() {
  let page: Lab05Page;

  beforeEach(() => {
    page = new Lab05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
