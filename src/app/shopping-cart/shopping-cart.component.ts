import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { HomeComponent } from '../home/home.component';
import { CartUpdateService } from '../cart-update.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartUpdateService:CartUpdateService, private homeComponent: HomeComponent, private shoppingCartService: ShoppingCartService, private router:Router) {}

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getItems();
    this.calculateTotalPrice();
    this.cartUpdateService.cartUpdated$.subscribe(() => {
      this.cartItems = this.shoppingCartService.getItems();
      this.calculateTotalPrice();
    });

  }

  removeItem(index: number): void {
    this.shoppingCartService.removeItem(index);
    this.cartItems = this.shoppingCartService.getItems();
    this.calculateTotalPrice();
  }

  decrementQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.calculateTotalPrice();
    }
  }

  incrementQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  checkout(): void {
  }
}
