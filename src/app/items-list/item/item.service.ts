declare var require: any;
//https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require

export class ItemService {
  jsonDataString: string = JSON.stringify(require('src/app/items-list/item/item-data.json'));
  jsonDataParsed: any[] = JSON.parse(this.jsonDataString);

  getItemBySku(sku: string) {
      let i = 0;
      while (this.jsonDataParsed[i].sku !== sku) {
        i++;
      }
      return this.jsonDataParsed[i];
  }

  logItems() {
    console.log(this.jsonDataString);
    console.log(this.jsonDataParsed);
    console.log('Items array initialized');
  }
}
