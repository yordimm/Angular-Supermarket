import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { ProductsService } from './providers/products.service';


import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductCardComponent,
    NavbarComponent,
    HomeComponent,
    AccountComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
