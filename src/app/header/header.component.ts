import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  whoIsLoggedIn: String = 'simple';
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('sellerLogin') && val.url.includes('seller')) {
          this.whoIsLoggedIn = 'seller'
          console.warn('inside seller')
        }
        else{
          console.warn("outside seller");
          
        }
      }

    })
  }

}
