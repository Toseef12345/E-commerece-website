import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public addProduct(productData:Product):Observable<Product>{
    return this.http.post<Product>('http://localhost:3000/product',productData)
  }
}
