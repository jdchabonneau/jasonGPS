import { RoofRectPage } from './app.po';

describe('roof-rect App', () => {
  let page: RoofRectPage;

  beforeEach(() => {
    page = new RoofRectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
