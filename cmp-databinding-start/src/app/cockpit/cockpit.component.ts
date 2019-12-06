import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('newServerContent',{static: true}) newServerContent: ElementRef;
  //newServerName = '';
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverName.value, serverContent: this.newServerContent.nativeElement.value });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverName.value, serverContent: this.newServerContent.nativeElement.value });
  }

}
