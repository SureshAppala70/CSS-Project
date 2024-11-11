import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { HttpClientModule} from '@angular/common/http';
import { DashboardRoutingModule } from '../../dashboard/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
