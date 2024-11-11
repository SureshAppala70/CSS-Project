import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableForm : FormGroup;
  locations: string[] = ['Location 1', 'Location 2', 'Location 3'];

  userList: any[] = [];

  constructor(private fb: FormBuilder) {
    this.tableForm = this.fb.group({
      startDate: [null],
      endDate: [null],
      unitId: [''],
      penskeLocation: ['Santa Clara'],
      confidenceLevel: [''],
      agreementNo: [''],
      allInOut: ['all'],
    });}

    ngOnInit(): void {
    }
  
    onSubmit() {
      console.log(this.tableForm.value);
    }

}
