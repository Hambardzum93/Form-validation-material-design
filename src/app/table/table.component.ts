import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/sevices/product.service';
import {Product} from '../shared/interfaces/interfaces';

const ELEMENT_DATA: Product[] = [
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
  {id: 'aa', name: 'Hydrogen', price: 1.0079, address: 'H', email: 'as@das.sad', phoneNumber: 454545454, date: new Date()},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  ELEMENT_DATA = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      d => {
        console.log(d)
      }
    )

  }

  displayedColumns: string[] = ['id', 'name', 'price', 'address', 'email', 'phoneNumber', 'date'];
  dataSource = ELEMENT_DATA;

}
