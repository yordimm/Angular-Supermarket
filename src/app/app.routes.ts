import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent} from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'account', component: AccountComponent},
    { path: 'product/:id', component: ProductComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
