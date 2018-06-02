import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }


  showCheckMark(item) {
    console.log(item);
    this.checkMarks[item] = true;
  }
}
