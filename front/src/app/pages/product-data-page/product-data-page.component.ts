import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { ProductModel } from '../../shared/models/product.model';
import { StorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-product-data-page',
  templateUrl: './product-data-page.component.html',
  styleUrls: ['./product-data-page.component.scss']
})
export class ProductDataPageComponent implements OnInit {

  productData: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,

  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductData(id);
  }

  private getProductData(id: number): void {
    this.productService.show(id).subscribe(data => {
      this.productData = data.data.attributes;
      console.log(this.productData);
    });
  }

}
