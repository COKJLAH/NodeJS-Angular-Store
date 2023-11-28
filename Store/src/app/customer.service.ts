import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customers'; // Замініть на ваш URL серверу

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCustomer(customer: any) {
    return this.http.post(this.apiUrl, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
