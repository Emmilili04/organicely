import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'organicely';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
     this.router.navigate(['login']);
  }

  showLogin(): void {
    this.router.navigateByUrl('login');
  }
}
