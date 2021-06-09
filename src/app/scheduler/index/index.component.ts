import { Component, OnInit } from '@angular/core';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  schedulers: Scheduler[] = [];

  constructor(public schedulerService: SchedulerService) { }

  ngOnInit(): void {
    this.getByFilter(new Date, new Date, "");
  }

  getByFilter(startEventDate: Date, endEventDate: Date, status: string): void {
    this.schedulerService.getAll(startEventDate, endEventDate, status).subscribe(
      (data: Scheduler[]) => {
        this.schedulers = data;
        console.log("load data is sucesss");
      }
    )
  }

}
