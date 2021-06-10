import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  scheduler: Scheduler;
  form: FormGroup;

  constructor(
    public schedulerService: SchedulerService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.scheduler = {
      id: 0,
      eventDate: new Date,
      effectiveDate: new Date,
      status: "",
      notes: ""
    }
    this.form = this.formBuilder.group({
      eventDate: ['', Validators.required],
      effectiveDate: [''],
      status: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.schedulerService.find(this.id).subscribe((data: Scheduler) => {
      this.scheduler = data;
    });
  }


  get f() {
    return this.form.controls;
  }


      
  submit(){
    console.log(this.form.value);
    this.schedulerService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('scheduler/index');
    })
  }

}
