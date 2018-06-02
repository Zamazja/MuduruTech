import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items = [
    {
      name: 'Playstation 4 black/grey controller',
      src: '../../assets/controller.jpg',
      price: '59.99',
      id: 'controller'
    },
    {
      name: 'Stinger Gaming Headset',
      src: '../../assets/headset.png',
      price: '35.99',
      id: 'headset'
    },
    {
      name: 'God of war Playstation 4 bundle',
      src: '../../assets/bundle2.jpeg',
      price: '564.99',
      id: 'bundle'
    },
    {
      name: '1TB Xbox One',
      src: '../../assets/xbox.jpeg',
      price: '299.99',
      id: 'xboxOne'
    }
  ];

  public checkMarks = {
    controller: false,
    headset: false,
    bundle: false,
    xboxOne: false,
    nSwitch: false,
    gChair: false,
    wiiU: false,
    mouse: false,
    n3DS: false,
    xkeyboard: false,
    gPC: false,
  };
  constructor(public storeService: StoreService) { }

  ngOnInit() {
  }


  showCheckMark(item) {
    console.log(item);
    this.checkMarks[item] = true;
    const index = this.items.find(function (obj: any) { return obj.id === item; });
    this.storeService.addToCart(index);
  }
}
