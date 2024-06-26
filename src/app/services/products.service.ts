import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL: string = 'https://localhost:7101/api/Clients/Get_All_SAFRA_Clients';
  Token_EndPoint: string = 'https://localhost:7101/api/AuthClients/GenerateJWTToken';

  constructor(private httpCLient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpCLient.get(this.API_URL).pipe(res => res);
  }

  getClients(): Observable<any> {
    return this.httpCLient.get(this.API_URL).pipe(res => res);
  }

  getToken(): Observable<any>{
    return this.httpCLient.get(this.Token_EndPoint).pipe(res => res);
  }
}