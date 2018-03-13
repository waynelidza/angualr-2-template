import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  showmenu = false;
  hidemenu = true;
  showlogin = true;
  count: number = 0;
  constructor(private router: Router) {

  }
ngOnInit(){
  this.showmenu = false;
}
  updateFromChild(event: any){

  this.showmenu = true;
this.hidemenu = false;
    this.router.navigate(['/landing']);
}


}
