import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StoreService {

  private store = new BehaviorSubject<any>([]);
  storeItems = this.store.asObservable();

  constructor() {}

  addToCart(item) {
    this.store.next(this.store.getValue().concat([item]));
  }

}
