import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ItemService } from './item.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit, DoCheck {
  item ;
  sku: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.sku = params['sku'];
      }
    );
    this.item = this.itemService.getItemBySku(this.sku);
  }

  ngDoCheck() {
    this.item = this.itemService.getItemBySku(this.sku);
  }

}
