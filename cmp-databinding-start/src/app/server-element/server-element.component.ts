import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked {

  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('Constructor Called !!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called !!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit Called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called !!')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called !!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called !!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called !!')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called !!');
  }
}
