import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  whoIsLoggedIn: string = 'simple';
  userName: string = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('sellerLogin') && val.url.includes('seller')) {
          this.whoIsLoggedIn = 'seller'
          // console.log('inside seller')
        }
        else {
          // console.log("outside seller");

        }
      }

    })

    const userStored = localStorage.getItem('sellerLogin')
    const parsedName = userStored && JSON.parse(userStored)[0]
    this.userName = parsedName.name;


  }
  public logout() {
    localStorage.removeItem('sellerLogin')
    this.whoIsLoggedIn = 'simple'
    this.router.navigate(['/'])
  }

}
