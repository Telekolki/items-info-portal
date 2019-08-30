import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items-list/item/item.service';

@Component({
  selector: 'app-out-of-stock-items',
  templateUrl: './out-of-stock-items.component.html',
  styleUrls: ['./out-of-stock-items.component.css']
})
export class OutOfStockItemsComponent implements OnInit {
  itemsArray = this.itemService.jsonDataParsed;
  itemsOutOfStock = [];

  checkOutOfStockItems() {
    for (const item of this.itemsArray) {
      if ((item.quantity === 0) && (this.itemsOutOfStock.length < 5)) {
        this.itemsOutOfStock.push(item);
      }
    }
  }

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.checkOutOfStockItems();
  }

}
