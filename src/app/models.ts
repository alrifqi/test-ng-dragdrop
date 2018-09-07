export class Person {
  id: number;
  name: string;
}

export interface Request {
  type: string;
  operation: string;
  data: Array<any>;
}

export interface ScheduleInterface  {
  firstshift: string;
  secondshift: string;
  thirdshift: string;
  forthshift: string;
}

export class ScheduleTypeData  {
  firstshift: string;
  secondshift: string;
  thirdshift: string;
  forthshift: string;
  constructor () {
    this.firstshift = '';
    this.secondshift = '';
    this.thirdshift = '';
    this.forthshift = '';
  }
}

export class Schedules {
  key: number;
  name: string;
  schedule: any[];
}

export class Employee {
  William: number;
  John: number;
  Michael: number;
}
