import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
declare var require: any

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  jsonDataString = JSON.stringify(require('src/app/items-list/items-data.json'));
  jsonDataParsed: Item[] = JSON.parse(this.jsonDataString);
  itemsArray: Item[] = [];


  convertJsonToArray() {
    for (const item of this.jsonDataParsed) {
      this.itemsArray.push(new Item(item.name, item.sku, item.quantity, item.orders));
    }
  }

  constructor() { }

  ngOnInit() {

    console.log(this.jsonDataString);
    console.log(this.jsonDataParsed);
    this.convertJsonToArray();
    console.log(this.itemsArray);
  }

}
