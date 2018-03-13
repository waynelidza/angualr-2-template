import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input("sidemenu")
  count: boolean;
  showlogin = true;
  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) {
  }

  ngOnInit() {

  }
  Login(event: any ) {
    this.showlogin = false;
      this.count = true;
      this.change.emit(this.count);
      console.log('login');
      console.log(JSON.stringify(this.showlogin));


    }



}
