
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items: any[] = [];

  constructor() {}

  getItems(): any[] {
    return this.items;
  }

  addItem(product: any): void {
   
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {

      const newItem = { ...product, quantity: 1 };
      this.items.push(newItem);
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
