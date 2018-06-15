import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../providers/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
products: Product [] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
