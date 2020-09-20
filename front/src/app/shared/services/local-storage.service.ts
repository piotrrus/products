import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }

  public setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
