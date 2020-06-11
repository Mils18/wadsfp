import { CartService } from './cart.service';

export class Order {
    _id: string;
    status: string;
    totalPrice: number;
    carts: CartService["carts"];
}
