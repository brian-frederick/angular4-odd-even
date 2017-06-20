import { Angular4OddEvenPage } from './app.po';

describe('angular4-odd-even App', () => {
  let page: Angular4OddEvenPage;

  beforeEach(() => {
    page = new Angular4OddEvenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
