import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
   }

  ngOnInit() {
  }
  
  onCreateServer() {
      this.serverCreationStatus = 'Server was created';
  }
  onUpdateServerName(event: any) {
   this.serverName = (<HTMLInputElement>event.target).value;
  }

}
