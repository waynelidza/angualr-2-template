import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  countDown;
  count = 60;
   showmenu = false ;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  goMain(){
    this.router.navigate(['/main']);
    alert('enter');
  }
}
