import { Item } from './item.model';

export class ItemService {
  require: any;
  jsonDataString = JSON.stringify(require('src/app/items-list/item/item-data.json'));
  jsonDataParsed: Item[] = JSON.parse(this.jsonDataString);
  itemsArray: Item[] = [];

  initItemsArrayFromJson() {
    for (const item of this.jsonDataParsed) {
      this.itemsArray.push(new Item(item.name, item.sku, Number(item.quantity), Number(item.orders)));
    }
    // console.log(this.jsonDataString);
    // console.log(this.jsonDataParsed);
    // console.log(this.itemsArray);
    console.log('Items array initialized');

  }
}
