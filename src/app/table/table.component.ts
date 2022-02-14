import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/interfaces/interfaces';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'address', 'email', 'phoneNumber', 'date'];
  dataSource: Product[];

  constructor(private productService: ProductService,
              private alert: AlertService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      prodData => {
        this.dataSource = prodData;
      }
    );

  }


  delete(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(prod => prod.id !== id)
      this.alert.warning('Product has been deleted')
      // alert('Product has been deleted')
    })
  }


}
