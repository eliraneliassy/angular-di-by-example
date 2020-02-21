import { StoreService } from './store.service';

import { Component, Injector, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export const SOME_TOKEN: InjectionToken<any> = new InjectionToken<any>('blabla');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: StoreService) {
    
  }

}
