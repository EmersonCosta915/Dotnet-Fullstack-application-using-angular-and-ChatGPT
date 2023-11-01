import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductItemComponent } from './store/product-item/product-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StoreComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StoreComponent // Export the StoreComponent
  ]
})
export class StoreModule { }
