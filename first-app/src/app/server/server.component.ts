import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
    .online {
      color: yellow;
    }
  `]
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
