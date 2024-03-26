import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  cartProducts : Product[] | undefined;

  constructor(private cartService: CartService, private formBuilder: FormBuilder){

  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  ngOnInit(): void {
    this.cartProducts = this.cartService.getItems();
  }

  onSubmit(): void{
    this.cartProducts = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
