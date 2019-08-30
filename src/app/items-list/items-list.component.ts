import { Component, OnInit } from '@angular/core';
import { ItemService } from './item/item.service';
import { Item } from './item/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemsArray: Item[] = this.itemService.itemsArray;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
  }
}
