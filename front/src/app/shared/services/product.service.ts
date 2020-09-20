import { Injectable } from '@angular/core';
import { RestApiService } from './api-service.service';
import { Observable } from 'rxjs';
import { IDataService } from '../interfaces/idata-service.interface';

const path = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IDataService {

  constructor(private apiService: RestApiService) { }

  public getAll(): Observable<any> {
    return this.apiService.get('products');
  }

  public show(id: number): Observable<any> {
    return this.apiService.get('products/show/' + id);
  }

  public update(id: number, data): Observable<any> {
    return this.apiService.post('products/update/' + id, data);
  }

  public add(data): Observable<any> {
    return this.apiService.post('products/create/', data);
  }

  public delete(id: number): Observable<any> {
    return this.apiService.get('products/delete/' + id);
  }


}
