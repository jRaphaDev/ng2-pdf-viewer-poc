import { PdfViewerAppPage } from './app.po';

describe('pdf-viewer-app App', () => {
  let page: PdfViewerAppPage;

  beforeEach(() => {
    page = new PdfViewerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
