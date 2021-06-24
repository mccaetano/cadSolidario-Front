import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipient } from '../recipient';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  nameSearch: string = '';
  recipients: Recipient[]=[];
  recipient: Recipient = {id: 0, name: "", birthDate: ""};
  form: FormGroup;

  constructor(public recipientService: RecipientService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      birthDate: ['']
    });
   }

  ngOnInit(): void {
    this.getByFilter();
  }

  getByFilter() {
    console.log("name:" + this.nameSearch);
    this.recipientService.getByFilter(this.nameSearch).subscribe(
      (data: Recipient[]) => {
        this.recipients = data;
      }
    );
  }

  getById(id: number) {
    this.recipientService.getById(id).subscribe(
      (data: Recipient) => {
        this.recipient = data;
      }
    );
  }

  submit(){}

}
