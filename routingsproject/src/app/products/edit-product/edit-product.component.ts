import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

   //server?: {id: number, name: string, status: string};
   product:any={};
   productName = '';
   productStatus = '';
 
   constructor(private prdService: ProductService) { }
 
   ngOnInit() {
     this.product = this.prdService.getProduct(1);
     this.productName = this.product.name;
     this.productStatus = this.product.status;
   }
 
   onUpdateProduct() {
     this.prdService.updateProduct(this.product.id, {name: this.productName, status: this.productStatus});
   }


}
