import { Component, OnInit } from '@angular/core';
import { ItemService } from './item/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemsArray = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemsArray = this.itemService.jsonDataParsed;
  }
}
