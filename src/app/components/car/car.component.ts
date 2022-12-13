import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car1: any = {         // "any" : her veri türü olabilir.
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  }; 
  car2: any = {    // {} bu işaret object anlamına gelir.
    productId: 2,
    productName: 'Kalem',
    categoryId: 2,
    unitPrice: 5,
  }; 
  car3: any = {
    productId: 3,
    productName: 'Silgi',
    categoryId: 3,
    unitPrice: 5,
  };
  car4: any = { productId: 4, productName: 'SU', categoryId: 5, unitPrice: 5 };
  car5: any = {
    productId: 5,
    productName: 'Parfüm',
    categoryId: 8,
    unitPrice: 5,
  };

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];

  constructor() {}

  ngOnInit(): void {}
}
