import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }

}
