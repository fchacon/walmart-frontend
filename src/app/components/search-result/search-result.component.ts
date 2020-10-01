import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppSettings } from 'src/app/config/app.settings';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
	@Input()
	products: Array<Product>;

	@Input()
	totalProducts: number;

	@Output()
	changePage = new EventEmitter<number>();

	public itemsPerPage = AppSettings.ITEMS_PER_PAGE;

	ngOnInit(): void {}

	public getImageUrl(imagen: string): string {
		return `http://${imagen}`;
	}

	public getPrice(precio: string): string {
		precio = precio.replace(/CLP/gi, '$');
		precio = precio.replace(/\,/gi, '.');
		return precio;
	}

	public paginate(event: { page: number }): void {
		this.changePage.emit(event.page + 1);
	}
}
