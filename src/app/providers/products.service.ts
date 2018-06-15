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
      image:
        'https://www.vueloiv.com/wp-content/uploads/new-apple-macbook-pro.png'
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
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(idx: string): Product {
    return this.products[idx];
  }
  searchByCharacter(query: string): Product[] {
    const searching = query.toLowerCase();
    let productsArray: Product[] = [];
    productsArray = this.products.filter((product, index) => {
      product.index = index;
      return product.name.toLowerCase().indexOf(searching) >= 0;
    });
    return productsArray;
  }
  searchByCategory(category: string): Product[] {
    let productsArray: Product[] = [];
    productsArray = this.products.filter((product, index) => {
      product.index = index;
      return product.category === category;
    });
    return productsArray;
  }
  searchByPrice(min: number, max: number): Product[] {
    let productsArray: Product[] = [];
    productsArray = this.products.filter((product, index) => {
      product.index = index;
      const currencyValue = Number(product.price);
      return (currencyValue >= min && currencyValue <= max);
    });
    return productsArray;
  }
}

export interface Product {
  name: string;
  price: string;
  category: string;
  brand: string;
  quantity: string;
  image?: string;
  index?: number;
}
