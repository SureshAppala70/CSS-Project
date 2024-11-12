import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: any[] = ['id', 'firstName', 'lastName', 'maidenName', 'age', 'username', 'bloodGroup', 'height'];
  @Input() dataSource: any[] = [];
  @Input() totalItems: any;
    itemsPerPage = 10;
    currentPageIndex = 0;
    selection: any; 

    constructor(){}


    onPageChange (event: PageEvent) {
    this.itemsPerPage = event. pageSize;
    this.currentPageIndex = event.pageIndex;
    }
}
