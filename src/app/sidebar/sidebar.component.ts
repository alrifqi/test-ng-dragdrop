import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public persons: any[] = Array();
  constructor(private scheduleService: SchedulesService) {
    scheduleService.getHours().subscribe(persons => {
      this.persons = persons;
    });
  }

  ngOnInit() {
  }

}
