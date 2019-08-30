import { Component, OnInit } from '@angular/core';
import { Item } from '../../items-list/item/item.model';
import { ItemService } from '../../items-list/item/item.service';

@Component({
  selector: 'app-top-items',
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.css']
})
export class TopItemsComponent implements OnInit {

  itemsArray: Item[] = this.itemService.itemsArray;
  itemsTopRated: Item[] = this.itemsArray.slice();

  sortItems() {
    this.itemsTopRated.sort(function(a, b){return b.orders - a.orders}).splice(5);
  }

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.sortItems();
  }

}
