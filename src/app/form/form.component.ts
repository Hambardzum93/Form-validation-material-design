import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../shared/interfaces/interfaces';
import {ProductService} from '../shared/services/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  buttonFlag: boolean = false;

  titleAlertName: string = 'Name is required';
  titleAlertPrice: string = 'Price is required';
  titleAlertAddress: string = 'Address is required';
  titleAlertEmail: string = 'Invalid Email';

  constructor(private productService: ProductService,
              private router: Router) {
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
    if (this.form.invalid) {
      return;
    }
    const products: Product = {
      name: this.form.value.productName,
      price: this.form.value.productPrice,
      address: this.form.value.address,
      email: this.form.value.email,
      phoneNumber: this.form.value.phoneNumber,
      date: new Date()
    }
    console.log('Form sending data', products)
    this.productService.addProduct(products).subscribe( p => {
      this.form.reset()
      console.log('ppp', p);
      this.router.navigate(['/'])
    })

  }





}
