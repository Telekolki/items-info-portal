import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items-list/item/item.service';

@Component({
  selector: 'app-top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.css']
})
export class TopItemsComponent implements OnInit {
  itemsArray = [];
  itemsTopRated = [];

  sortItems() {
    this.itemsTopRated.sort((a, b) =>  b.orders - a.orders).splice(5);
  }

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemsArray = this.itemService.jsonDataParsed;
    this.itemsTopRated = this.itemsArray.slice();
    this.sortItems();
  }

}
