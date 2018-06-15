import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../providers/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  productDetail() {
    this.router.navigate(['/product', this.index]);
  }
}
