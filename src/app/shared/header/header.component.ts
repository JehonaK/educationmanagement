import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // photoUrl = ENDPOINTS.products.getProductImage;
  // products: ProductModel[];
  // cartProducts: ProductCartModel[];
  cartQty = 0;
  opened = false;
  status2 = false;
  status3 = false;
  customerName: string;

  constructor() {
  }

  ngOnInit() {
    // this.products = this.productService.getProducts();
    // this.cartProducts = this.cartService.getProductsFromCart();
    // this.getCartProducts();
    // this.fetchCustomer();
  }

  // getCartProducts() {
  //   this.cartService.getCartDataFromSubject().subscribe(
  //     result => {
  //       if (result) {
  //         this.cartQty = 0;
  //         const carts = result as Array<ProductCartModel>;
  //         carts.forEach(item => {
  //           this.cartQty += item.qty;
  //         });
  //       }
  //     }
  //   );
  // }
  //
  // getProductsFromCart() {
  //   return this.cartService.getProductsFromCart();
  // }


  toggleClass() {
    this.status2 = false;
    this.opened = !this.opened;
  }

  toggleClass2() {
    this.opened = false;
    this.status2 = !this.status2;
  }

  onHamburgerclick() {
    this.status3 = !this.status3;
  }

  isLoggedIn(): boolean {
    // const element = this.storageService.get(LocalStorageKey.ACCESS_TOKEN);
    const isLogedIn = true;
    // if (element != null) {
    //   isLogedIn = !isLogedIn;
    // }
    return isLogedIn;
  }

  // pageR() {
  //   this.paginationService.changePage(1);
  // }
  //
  // fetchCustomer(): void {
  //   if (this.baseStorageService.getStorageOf(LocalStorageKey.CUSTOMER_ID) != null) {
  //     const customerId = this.baseStorageService.getStorageOf(LocalStorageKey.CUSTOMER_ID, true);
  //     if (customerId && customerId.length > 0) {
  //       this.restService.request<any>(HttpRequestMethod.GET, ENDPOINTS.customers.getAll + `/${customerId}`)
  //         .subscribe((res) => {
  //             this.customerName = res.name;
  //           },
  //           (err) => {
  //             console.log(err);
  //           });
  //     }
  //   }
  // }
}
