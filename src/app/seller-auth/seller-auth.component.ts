import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit{
  sellerForm!: FormGroup<any>;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
  this.sellerForm=this.fb.group({
    name:[''],
    email:[],
    phone:[]
  })
  }
  signUp(): void {
    console.log(this.sellerForm.value);
  }
}
