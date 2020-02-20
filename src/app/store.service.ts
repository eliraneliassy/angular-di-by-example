import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform'
})
export class StoreService {

  constructor(private injector: Injector) {
    console.log('new instance of StoreService', injector);
  }

}
