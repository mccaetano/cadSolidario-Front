import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public schedulerService: SchedulerService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.form = this.formBuilder.group({
        eventDate: ['', Validators.required],
        effectiveDate: [''],
        status: ['', Validators.required],
        notes: ['', Validators.required]
      })
    }

  ngOnInit(): void { }

  get f() {
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
