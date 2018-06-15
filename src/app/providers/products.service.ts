import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      name: 'mcbook pro',
      price: '9269000',
      category: 'technology',
      brand: 'apple',
      quantity: '15',
      image: 'https://www.vueloiv.com/wp-content/uploads/new-apple-macbook-pro.png'
    },

    {
      name: 'naranja',
      price: '1000',
      category: 'food',
      brand: 'oromiel',
      quantity: '50',
      // tslint:disable-next-line:max-line-length
      image: 'https://comefruta.es/wp-content/uploads/naranjas-verano.jpg'
    }
  ];

  constructor() {}
  getProducts(): Product [] {
    return this.products;
  }
}



export interface Product {
  name: string;
  price: string;
  category: string;
  brand: string;
  quantity: string;
  image?: string;
}
