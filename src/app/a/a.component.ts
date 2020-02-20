import { StoreService } from './../store.service';
import { Component, OnInit, OnDestroy, Injector, SkipSelf } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {



  constructor(
    private store: StoreService
  ) {

  }

  ngOnInit(): void {

  }



}
