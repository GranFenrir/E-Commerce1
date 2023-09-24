import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartUpdateService {
  private cartUpdateSubject = new Subject<void>();

  cartUpdated$ = this.cartUpdateSubject.asObservable();

  updateCart(): void {
    this.cartUpdateSubject.next();
  }
}
