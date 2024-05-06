import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../product.service';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent,ProductComponent,EditProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public products: {id: number, name: string, status: string}[] = [];

  constructor(private prdService: ProductService) { }

  ngOnInit() {
    this.products = this.prdService.getProducts();
  }

}
