import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
   }

  ngOnInit() {
  }

}
