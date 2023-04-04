import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SellerInterface } from '../interfaces/seller-credentials';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient,private router:Router) { }


  postSellerFormCredentials(data: SellerInterface): void {
   this.http.post<SellerInterface[]>('http://localhost:3000/seller', data).subscribe(res => {
      if (res) {
        localStorage.setItem('seller',JSON.stringify(res))
        this.isUserLoggedIn.next(true)
        this.router.navigate(['seller-dashboard'])
      }
      
    })
  }
  sellerReload(){
    if(localStorage.getItem('seller')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['seller-dashboard'])

    }
  }
}
