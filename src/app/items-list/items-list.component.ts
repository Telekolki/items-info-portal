import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
declare var require: any

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  jsonString = JSON.stringify(require('src/app/items-list/items-data.json'));
  jsonData: Item[] = JSON.parse(this.jsonString);
  itemsList: Item[] = [];


  convertJsonToArray() {
    for (const item of this.jsonData) {
      this.itemsList.push(new Item(item.name, item.sku, item.quantity, item.orders));
    }
  }

  constructor() { }

  ngOnInit() {

    console.log(this.jsonString);
    console.log(this.jsonData);
    this.convertJsonToArray();
    console.log(this.itemsList);
  }

}
