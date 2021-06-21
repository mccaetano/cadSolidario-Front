import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';
import { StatusList } from "../statusList";
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number = 0;
  scheduler: Scheduler;

  constructor(
    public schedulerService: SchedulerService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.scheduler = {
      id: 0,
      eventDate: new Date,
      effectiveDate: new Date,
      status: { code: "", description: ""},
      notes: ""
    };
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
       
    this.schedulerService.find(this.id).subscribe((data: Scheduler)=>{
      this.scheduler = data;
    });
  }


}
