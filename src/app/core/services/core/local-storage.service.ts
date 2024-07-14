import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage!: Storage;
  
  constructor() {
    this._localStorage = window.localStorage;
   }

  set<T>(key: string, value: T): void {
    this._localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    const value = this._localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key: string): void {
    this._localStorage.removeItem(key);
  }

  clear(): void {
    this._localStorage.clear();
  }
}
