import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Ngo Tan Thanh';
  public age = 0;
  public animals = ['Monkey', 'Lion', 'Tiger'];
  public fruits = [
    { name: 'Apple', price: 15, sales: true },
    { name: 'Grape', price: 20, sales: false },
    { name: 'Orange', price: 10, sales: true },
    { name: 'Apple', price: 25, sales: false },
    { name: 'Grape', price: 14, sales: true },
    { name: 'Orange', price: 18, sales: true },
  ];
  public cities = [{
    city: "An Giang"
  }]

  constructor() {}

  public resetName = () => {
    this.name = '';
  };

  public ngOnInit(): void {
    console.log('annimals: ', this.animals);
  }
}
