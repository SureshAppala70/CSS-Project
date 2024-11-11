import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private isSidebarVisible = new BehaviorSubject<boolean>(true);
  isSidebarVisible$ = this.isSidebarVisible.asObservable();
  constructor(private http: HttpClient) { }

  getDashboardData(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${'http://dummyjson.com/user'}?page=${page}&size=${size}`)
  };

  toggleSidebar(){
    this.isSidebarVisible.next(!this.isSidebarVisible.value);
  }
}


