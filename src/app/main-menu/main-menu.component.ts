import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  lastUserActionTimestamp: Date = new Date();
  constructor() { }

  ngOnInit() {
  this.lastUserActionTimestamp.getUTCDate();
  }

}
