import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  address: string;
  age: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  titleAlertName: string = 'Name is required';
  titleAlertPrice: string = 'Price is required';
  titleAlertAddress: string = 'Address is required';
  titleAlertEmail: string = 'Invalid Email';


  constructor() {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('')
    });
  }

  onSubmit(value: any) {
    console.log('Form submitted: ', this.form);
  }
}
