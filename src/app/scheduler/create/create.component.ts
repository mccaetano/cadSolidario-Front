import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Scheduler } from 'rxjs';
import { SchedulerService } from '../scheduler.service';
import { StatusListService } from '../status-list.service';
import { StatusList } from '../statusList';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  bsDate: Date = new Date();

  statusList: StatusList[] = [];


  constructor(
    public schedulerService: SchedulerService,
    public statusListService: StatusListService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.form = this.formBuilder.group({
        eventDate: ['', Validators.required],
        effectiveDate: [''],
        status: ['', Validators.required],
        notes: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.statusListService.getAll().subscribe((data: StatusList[]) => {
      this.statusList = data;
    }); 
  }


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
