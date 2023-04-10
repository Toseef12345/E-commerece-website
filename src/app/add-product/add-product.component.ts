import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product-service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductSuccessMessage: string | undefined;
  addProductForm!: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.addProductForm = this.fb.group({
      title: [],
      color: [],
      category: [],
      price: [],
      image: [],
      desc: []

    })
  }
  addProduct() {
    console.log(this.addProductForm.value);
    this.productService.addProduct(this.addProductForm.value).subscribe((res) => {
      if (res) {
        this.addProductSuccessMessage = "Product has been added successfully"
      }
      setTimeout(() => {
        this.addProductSuccessMessage = '';
     
      }, 2000);

    })
    this.addProductForm.reset()

  }
}
