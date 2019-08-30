import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './items-list/item/item.component';
import { TopItemsComponent } from './home/top-items/top-items.component';
import { OutOfStockItemsComponent } from './home/out-of-stock-items/out-of-stock-items.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemService } from './items-list/item/item.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'items', component: ItemsListComponent, children: [
    { path: ':sku', component: ItemComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsListComponent,
    ItemComponent,
    TopItemsComponent,
    OutOfStockItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private itemService: ItemService) {
    this.itemService.logItems();
  }
}
