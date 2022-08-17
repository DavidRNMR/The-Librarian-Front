import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {


  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  private modals: string[] = [];

  constructor() {}

  changeMessage(message: string) {

    this.messageSource.next(message)

  }








}
