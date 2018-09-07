import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScheduleInterface, Person, Request } from './models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tracknroll';
  constructor() { }

  ngOnInit() { }
  ngAfterViewInit() { }
}
