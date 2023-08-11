import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { DepartmentListComponent } from './dashboard/department-list/department-list.component';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private baseUrl = 'http://65.0.155.254:5001/admin/department/add';

  constructor(private http: HttpClient,private ngxpagination:NgxPaginationModule,private departmentlist:DepartmentListComponent) {}

  getDepartments(page: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}/departments?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }

  importCSV(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const url = `${this.baseUrl}/departments/import`;
    return this.http.post(url, formData);
  }
}
