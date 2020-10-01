import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/config/app.settings';
import { PaginatedResponse } from 'src/app/models/paginated-response.model';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
	public products: Array<Product>;
	public totalProducts: number;
	public currentSearch = '';

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.searchProducts('');
	}

	public searchProducts(text: string, page?: number): void {
		this.currentSearch = text;
		this.productsService
			.getProducts(text, page ? page : 1, AppSettings.ITEMS_PER_PAGE)
			.subscribe((res: PaginatedResponse<Product>) => {
				this.products = res.data;
				this.totalProducts = res.total;
			});
	}
}
