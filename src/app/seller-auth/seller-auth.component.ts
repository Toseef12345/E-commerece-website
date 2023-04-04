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
  sellerForm!: FormGroup<any>;
  constructor(private fb: FormBuilder, private sellerService: SellerService,private router:Router) {
    this.sellerForm = this.fb.group({
      name: [''],
      email: [],
      phone: []
    })
   }
  ngOnInit(): void {
   this.sellerService.sellerReload()
  }
  signUp(): void {
    this.sellerService.postSellerFormCredentials(this.sellerForm.value)
    this.router.navigate(['seller-auth'])
  }
}
