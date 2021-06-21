import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Scheduler } from './scheduler';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private apiURL = "/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(startEventDate: Date, endEventDate: Date, status: string, page: number): Observable<Scheduler[]> {
    return this.httpClient.get<Scheduler[]>(this.apiURL + '/calendar?startEventDate='+ 
      startEventDate.toISOString().split('T')[0] + "&endEventDate=" + 
      endEventDate.toISOString().split('T')[0] + "&status=" + status+ "&limit=20&skip=" + page)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(scheduler: Scheduler): Observable<Scheduler> {
    if (scheduler.effectiveDate == null) { scheduler.effectiveDate = new Date("1900-01-01")}
    if (scheduler.eventDate == null) { scheduler.eventDate = new Date("1900-01-01")}
    
    return this.httpClient.post<Scheduler>(this.apiURL + '/calendar', JSON.stringify(scheduler), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Scheduler> {
    return this.httpClient.get<Scheduler>(this.apiURL + '/calendar/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, scheduler: Scheduler): Observable<Scheduler> {
    return this.httpClient.put<Scheduler>(this.apiURL + '/calendar/' + id, JSON.stringify(scheduler), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
