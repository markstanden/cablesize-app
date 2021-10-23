import { PageContent } from './types/PageContent';

export class Page implements PageContent {
   private _html: string;

   constructor(html: any) {
      this._html = html;
   }
   
   render() {
      return this._html;
   }
}
