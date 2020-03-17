import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
//   selector: 'pm-product-detail',  // we will not nest the component but navigate to it via routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Page Detail';
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
