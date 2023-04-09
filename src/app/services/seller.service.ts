import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SellerInterface } from '../interfaces/seller-credentials';
import { Router } from '@angular/router';
import { SellerLoginInterface } from '../interfaces/seller-login';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  loginError: boolean = false;


  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }


  public userSignup(data: SellerInterface): void {
    this.http.post<SellerInterface[]>('http://localhost:3000/seller', data)
      .subscribe(res => {
        if (res) {
          localStorage.setItem('seller', JSON.stringify(res))
          this.isUserLoggedIn.next(true)
          this.router.navigate(['seller-dashboard'])
        }

      })
  }
  public sellerReload(): void {
    if (localStorage.getItem('seller')) {
      this.isUserLoggedIn.next(true)
      this.router.navigate(['seller-dashboard'])

    }
  }
  public userLogin(data: SellerLoginInterface): void {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`)
      .subscribe((res: any) => {
        if (res.length >= 1) {
          console.log("Login Successfull");
          localStorage.setItem('sellerLogin', JSON.stringify(res))
          this.loginError = false
          this.isUserLoggedIn.next(true)
          this.router.navigate(['seller-dashboard'])
        }
        else {
          this.loginError = true
          console.log("Please Enter Valid Detail");
        }


      })
  }
  public sellerLoginReload(): void {
    if (localStorage.getItem('sellerLogin')) {
      this.isUserLoggedIn.next(true)
      this.router.navigate(['seller-dashboard'])
    }
  }
}
