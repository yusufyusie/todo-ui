import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private baseUrl: string = "http://localhost:18291/api/Todos";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createTodo(data:any): Observable<any[]> {
    return this.http.post<any[]>(this.baseUrl, data);
  }
}
