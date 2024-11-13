import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  // displayedColumns: any[] = ['id', 'firstName', 'lastName', 'maidenName', 'age', 'username', 'bloodGroup', 'height'];
  displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Input() totalItems: any;
    itemsPerPage = 10;
    currentPageIndex = 0;
    selection: any; 

    constructor(){}

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['dataSource'] && this.dataSource.length > 0){
        this.displayedColumns = Object.keys(this.dataSource[0]);
      }
    }

    onPageChange (event: PageEvent) {
    this.itemsPerPage = event. pageSize;
    this.currentPageIndex = event.pageIndex;
    }
}
