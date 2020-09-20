import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

const restPath = 'http://localhost/products/backend/api/';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  public get(url: string): Observable<any> {
    return this.http.get<any>(restPath + url)
      .pipe(catchError(this.handleError));
  }

  public getJson(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(catchError(this.handleError));
  }

  public post(url: string, params: any): Observable<any> {
    console.log(restPath + url, params);
    return this.http.post<any>(`${restPath}${url}`, params)
      .pipe(catchError(this.handleError));
  }

  public put(url: string, params: any): Observable<any> {
    console.log(restPath + url, params);
    return this.http.post<any>(`${restPath}${url}`, params)
      .pipe(catchError(this.handleError));
  }

  public patch(url: string): Observable<any> {
    return this.http.patch<any>(`${restPath}${url}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  public delete(url: string): Observable<any> {
    console.log(url + ' removed');
    return this.http.delete<any>(`${restPath}${url}`).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    console.log('ERR:' + error.error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      console.log(error);
      // Get client-side error
      // console.log('ERR: ' + error.error.message);
      errorMessage = error.error.message;
    } else {
      console.log(error);
      // Get server-side error
      // console.log('SERV ERR: ' + error.message);
      if (error.status !== 200) {
        errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
      }
    }
    // if (errorMessage) {
    // window.alert(errorMessage);
    // return errorMessage;
    // this.showError(errorMessage);
    // this.toastr.error('Error', errorMessage);
    return throwError(errorMessage);
    // }
  }

  showError(message) {
    this.toastr.error('Error', message);
  }
}
