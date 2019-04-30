import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagedata:any =["./assets/images/dashboard_full_1.jpg","./assets/images/dashboard_full_2.jpg","./assets/images/dashboard_full_3.jpg"]

  constructor() { }

  ngOnInit() {
  }

}
