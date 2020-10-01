import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../config/app.settings';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { PaginatedResponse } from '../models/paginated-response.model';

@Injectable()
export class ProductsService {
	private readonly backendUrl = AppSettings.BACKEND_BASE_URL;

	constructor(private http: HttpClient) {}

	public getProducts(text: string, page: number, perPage: number): Observable<PaginatedResponse<Product>> {
		const params = {
			text: text ? text : '',
			page: page + '',
			perPage: perPage + '',
		};
		return this.http.get<PaginatedResponse<Product>>(`${this.backendUrl}products`, { headers: {}, params });
	}
}
