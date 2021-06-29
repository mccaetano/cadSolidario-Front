import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Scheduler } from '../scheduler';
import { SchedulerService } from '../scheduler.service';
import { StatusListService } from '../status-list.service';
import { StatusList } from '../statusList';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  statusCurrent?='';
  statusList: StatusList[] = [];
  scheduler: Scheduler;

  constructor(private modalRef: BsModalRef,
    private statusListService: StatusListService,
    private scehdulerService: SchedulerService) {
      this.statusListService.getAll().subscribe(
        (data: StatusList[]) => {
          this.statusList = data;
        }
      );
      this.scheduler = {};
     }

  ngOnInit(): void {
  }


  close() {
    this.modalRef.hide();
  }

  setStatus() {
    this.scehdulerService.create(this.scheduler).subscribe();
    this.close();
  }
}
