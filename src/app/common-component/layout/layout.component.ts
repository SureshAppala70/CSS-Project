import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/service/dashboard_service/dashboard.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isSidenavOpened = true;
  isVisable: boolean = false;

  navItems = [
    { name: 'Unit Identification', icon: 'dashboard' },
    { name: 'Inspection Result', icon: 'settings' }
  ]
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.isSidebarVisible$.subscribe(
      isVisable => this.isVisable = this.isVisable);
    console.log("@@@@", this.isVisable)
  }
  onNavItemClick(item: any) {
    console.log(`Navigating to ${item.name}`);
  }

}
