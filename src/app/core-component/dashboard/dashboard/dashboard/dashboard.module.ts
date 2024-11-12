import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { HttpClientModule} from '@angular/common/http';
import { DashboardRoutingModule } from '../../dashboard/dashboard/dashboard-routing.module';
import { TableComponent } from 'src/app/common-component/table/table.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
