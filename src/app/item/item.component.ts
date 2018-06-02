import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public store = [];
  constructor(public storeService: StoreService) { }

  ngOnInit() {
    this.storeService.storeItems.subscribe((res: any) => {
      console.log(res);
      this.store = res;
    });
  }

}
