import { Component, OnInit, Input } from '@angular/core';
import { SchedulesService } from '../schedules.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../models';


@Component({
  selector: 'app-schedule-row',
  templateUrl: './schedule-row.component.html',
  styleUrls: ['./schedule-row.component.css']
})
export class ScheduleRowComponent implements OnInit {

  @Input() date: string;
  public schedules: any[] = Array();
  public closeResult: string;
  public result: Employee;
  constructor(private scheduleService: SchedulesService,
              private modalService: NgbModal) {
    scheduleService.getSchedule().subscribe(schedules => {
      this.schedules = schedules;
    });
  }

  ngOnInit() {
  }

  addSchedule(index, data) {
    this.scheduleService.addSchedule(index, data);
  }

  onDrop(event, shift, primaryIndex, secondaryIndex) {
    this.scheduleService.fillShift(event.dragData, shift, primaryIndex, secondaryIndex);
  }

  showSummary(content, index) {
    this.result = this.scheduleService.getSummaryDay(index);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log(reason);
    });
  }

}
