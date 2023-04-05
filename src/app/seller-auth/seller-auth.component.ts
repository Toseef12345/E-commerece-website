import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  sellerSignupForm!: FormGroup;
  sellerLoginForm!: FormGroup;

  isLogin: boolean = false
  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router) {
    this.sellerSignupForm = this.fb.group({
      name: [''],
      email: [],
      password: []
    })
    this.sellerLoginForm = this.fb.group({
      email: [],
      password: []
    })
  }
  ngOnInit(): void {
    this.sellerService.sellerReload()
  }
  signUp(): void {
    this.sellerService.postSellerFormCredentials(this.sellerSignupForm.value)
    this.router.navigate(['seller-auth'])
  }
  sellerLogin() {
    this.isLogin = true
  }
  sellerSignUp() {
    this.isLogin = false

  }
  public login(): void {
    console.log(this.sellerLoginForm.value);

  }
}
