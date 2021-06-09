import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    eventDate: new FormControl('', [Validators.required]),
    effectiveDate: new FormControl('', null),
    status: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required])
  });

  constructor(
    public schedulerService: SchedulerService,
    private router: Router) { }

  ngOnInit(): void {
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

  submit(){
    console.log(this.form.value);
    this.schedulerService.create(this.form.value).subscribe(res => {
         console.log('Scheduler created successfully!');
         this.router.navigateByUrl('scheduler/index');
    })
  }

}
