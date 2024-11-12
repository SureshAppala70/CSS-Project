import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../../../../core/service/dashboard_service/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableForm : FormGroup;
  locations: string[] = ['Location 1', 'Location 2', 'Location 3'];

  userList: any[] = [];
  data: any;
  page=1;
  pageSize = 10;
  totalItems: number = 0;
  paginator: number = 0;

  constructor(private fb: FormBuilder, private dashboardService: DashboardService) {
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
      this.loadUser();
    };
  
    onSubmit() {
      console.log(this.tableForm.value);
    };

    loadUser(){
      this.dashboardService.getDashboardData(this.page, this.pageSize).subscribe((response: any)=>{
      
        this.data = response.users;
        this.userList = this.data.slice(0, 10);
        console.log("@@@@@@@@@@@@@@@@@",this.userList);
        this.totalItems = response.total;
      })
    }

}
