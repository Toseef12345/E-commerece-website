import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerInterface } from '../interfaces/seller-credentials';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }


  postSellerFormCredentials(data: SellerInterface): Observable<SellerInterface> {
    return this.http.post<SellerInterface>('http://localhost:3000/seller', data)
  }
}
