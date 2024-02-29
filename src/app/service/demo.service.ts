import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

 private data: number = 100;

  constructor() { }
  public getData(): number {
    return this.data;
  }
  public setData(data:number): void {
    this.data =data;
  }

}
