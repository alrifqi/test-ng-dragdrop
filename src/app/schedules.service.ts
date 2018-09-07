import { Injectable } from '@angular/core';
import { ScheduleInterface, Person, Request, Schedules, ScheduleTypeData } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  public schedules: any[] = Array();
  public persons: any = Array();
  constructor() {
    this.persons = {'William': 0, 'John': 0, 'Michael': 0};
    const startdate = 17;
    for (let i = 0; i <= 4; i++) {
      const schedule1 = new ScheduleTypeData();
      const schedule2 = new ScheduleTypeData();
      const schedule3 = new ScheduleTypeData();
      const currentdate = startdate + (i + 1);
      const schedules = {
        key: i,
        name: `${currentdate} September 2019`,
        schedule: [schedule1, schedule2, schedule3]
      };
      this.schedules.push(schedules);
    }
  }
  getSchedule (): Observable<any[]> {
    return of(this.schedules);
  }

  addSchedule (index, data) {
    const initSchedule = new ScheduleTypeData();
    this.schedules[index].schedule.push(initSchedule);
  }

  fillShift (person, shift, primaryIndex, secondaryIndex) {
    this.resetHours();
    const currentSchedule = this.schedules[primaryIndex];
    currentSchedule.schedule.forEach(function(part, index, arr) {
      if (index === secondaryIndex) {
        arr[index][shift] = person;
      }
    });
    this.calculateHours(person);
  }

  async calculateHours (person) {
    // this.resetHours();
    const self = this;
    this.schedules.forEach(function(part, index, arr) {
      part.schedule.forEach(function(partSecondary, indexSecondary, arrSecondary) {
        // const temp = Object.entries(partSecondary);
        for (const [key, value] of Object.entries(partSecondary)) {
          if (value === 'William') {
            self.persons['William'] = self.persons['William'] + 4;
          } else if (value === 'John') {
            self.persons['John'] = self.persons['John'] + 4;
          } else if (value === 'Michael') {
            self.persons['Michael'] = self.persons['Michael'] + 4;
          }
        }
      });
    });
  }

  resetHours () {
    this.persons = {'William': 0, 'John': 0, 'Michael': 0};
  }

  getHours(): Observable<any[]> {
    return of(this.persons);
  }

  getSummaryDay(primaryIndex) {
    const summaryPersons = {'William': 0, 'John': 0, 'Michael': 0};
    this.schedules[primaryIndex].schedule.forEach(function (partSecondary, indexSecondary, arrSecondary) {
      for (const [key, value] of Object.entries(partSecondary)) {
        if (value === 'William') {
          summaryPersons['William'] = summaryPersons['William'] + 4;
        } else if (value === 'John') {
          summaryPersons['John'] = summaryPersons['John'] + 4;
        } else if (value === 'Michael') {
          summaryPersons['Michael'] = summaryPersons['Michael'] + 4;
        }
      }
    });
    return summaryPersons;
  }
}
