import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product:any={};

  constructor(private prdService: ProductService) { }

  ngOnInit() {
    this.product = this.prdService.getProduct(1);
  }
}
