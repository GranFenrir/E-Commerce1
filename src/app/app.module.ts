import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductService } from './product.service'; 
import { ShoppingCartService } from './shopping-cart.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShoppingCartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ProductService, 
    ShoppingCartService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
