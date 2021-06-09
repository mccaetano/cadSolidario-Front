import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number = 0;
  scheduler: Scheduler | undefined;
  form: FormGroup = new FormGroup({
    eventDate: new FormControl('', [Validators.required]),
    effectiveDate: new FormControl('', null),
    status: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required])
  });

  constructor(
    public schedulerService: SchedulerService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.schedulerService.find(this.id).subscribe((data: Scheduler)=>{
      this.scheduler = data;
    });
     
    this.form = new FormGroup({
      eventDate: new FormControl('', [Validators.required]),
      effectiveDate: new FormControl('', null),
      status: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required])
    });
  }


  get f(){
    return this.form.controls;
  }

}
