import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  addCustomer(name: string, password: string, phoneNo: string): void {
    this.customerService.addCustomer({ Name: name, Password: password, PhoneNo: phoneNo }).subscribe(() => {
      // Clear the form or do any additional logic after adding a customer
    });
  }
}
