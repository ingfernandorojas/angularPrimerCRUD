import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Form
import { FormsModule } from '@angular/forms';

// Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Toastr
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';

// Components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

// Services
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
