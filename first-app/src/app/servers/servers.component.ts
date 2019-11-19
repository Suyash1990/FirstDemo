import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'TestServer';
  serverCreated = false;
  serverList = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = 'Server Created';
  }
}
