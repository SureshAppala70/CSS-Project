import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/service/dashboard_service/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    console.log("Clicked");
    
    this.dashboardService.toggleSidebar();
  }

}
