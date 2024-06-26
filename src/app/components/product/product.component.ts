import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { billsInterface } from '../../interfaces/bills.interface';
import { tokenInterface } from '../../interfaces/token.interface';
import { ClientsInterface } from '../../interfaces/clients.interface';
import { billsProductInterface } from '../../interfaces/bills-product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  productList: ProductInterface[] = [];
  clients: ClientsInterface[] = [];
  bills: billsInterface[] = [];
  billsproducto: billsProductInterface[] = [];
  token: tokenInterface[] = [];

  constructor(private productsService: ProductsService, private clientsInterface: ProductsService, private tokenInterface: ProductsService ) { }

  ngOnInit(): void {
    this.getClients()
    this.getToken()
  }

  getClients() {
    this.productsService.getProducts().subscribe({
      next: (result) => {
        this.clients = result.result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getToken() {
    this.tokenInterface.getToken().subscribe({
      next: (result) => {
        this.token = result.result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}