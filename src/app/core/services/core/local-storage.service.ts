import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage!: Storage;
  
  constructor() {
    this._localStorage = window.localStorage;
   }

  set(key: string, value: any): void {
    this._localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return this._localStorage.getItem(key);
  }

  remove(key: string): void {
    this._localStorage.removeItem(key);
  }

  clear(): void {
    this._localStorage.clear();
  }
}
