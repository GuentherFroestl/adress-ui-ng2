import { AddresUiNg2Page } from './app.po';

describe('addres-ui-ng2 App', function() {
  let page: AddresUiNg2Page;

  beforeEach(() => {
    page = new AddresUiNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
