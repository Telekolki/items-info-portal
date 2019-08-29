import { Component, OnInit } from '@angular/core';
import { Item } from './items-list/item.model';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'items-info-portal';

  jsonDataString = JSON.stringify(require('src/app/items-list/items-data.json'));
  jsonDataParsed: Item[] = JSON.parse(this.jsonDataString);
  itemsArray: Item[] = [];


  convertJsonToArray() {
    for (const item of this.jsonDataParsed) {
      this.itemsArray.push(new Item(item.name, item.sku, item.quantity, item.orders));
    }
  }

  ngOnInit() {

    console.log(this.jsonDataString);
    console.log(this.jsonDataParsed);
    this.convertJsonToArray();
    console.log(this.itemsArray);
  }
}
