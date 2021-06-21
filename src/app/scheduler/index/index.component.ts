import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';
import { StatusListService } from '../status-list.service';
import { StatusList } from '../statusList';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  startEventDate='';
  endEventDate='';
  status='';
  page=1;
  schedulers: Scheduler[] = [];
  statusList: StatusList[] = [];

  constructor(public schedulerService: SchedulerService, 
    public statusListService: StatusListService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.page = Number(this.route.snapshot.params['page']);
    this.getByFilter();
    this.statusListService.getAll().subscribe((data: StatusList[]) => {
      this.statusList = data;
    });
  }

  getByFilter(): void {
    var startEventDate: Date = new Date('1900-01-01');
    if (this.startEventDate != '' && this.startEventDate != null) {
      startEventDate = new Date(this.startEventDate);
    }
    var endEventDate: Date = new Date('1900-01-01'); 
    if (this.endEventDate != '' && this.endEventDate != null) {
      endEventDate = new Date(this.endEventDate);
    }
    if (this.page <= 0) {
      this.page = 1;
    }
    var status: string = this.status;
    this.schedulerService.getAll(startEventDate, endEventDate, status, this.page).subscribe(
      (data: Scheduler[]) => {
        this.schedulers = data;
        console.log("load data is sucesss");
      }
    )
  }

  changePage(pg: string): void {
    if (pg == "m") { 
      if (this.page >= 1) {
        this.page -= this.page;
      }
    } else {
      if (pg == "p") {
        if (this.schedulers.length > 0) {
          this.page += this.page;
        }
      }
    }
    this.getByFilter();
  }

}
