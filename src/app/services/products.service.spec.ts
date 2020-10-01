import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { PaginatedResponse } from '../models/paginated-response.model';
import { Product } from '../models/product.model';

export const mockPaginatedResponseProduct: PaginatedResponse<Product> = {
	data: [
		{
			id: 101,
			brand: 'LG',
			description: 'Televisor LG',
			discount: 50,
			image: 'http://google.cl/images/lg.jpg',
			price: 400000,
		},
	],
	total: 1,
};

describe('ProductsService', () => {
	let httpTestingController: HttpTestingController;
	let service: ProductsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProductsService],
			imports: [HttpClientTestingModule],
		});

		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(ProductsService);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('random should should provide data', () => {
		service.getProducts('101', 1, 10).subscribe((res: PaginatedResponse<Product>) => {
			expect(res).not.toBe(null);
			expect(res.data).toBeDefined();
			expect(res.total).toBeDefined();
			expect(res.data.length).toEqual(1);
			expect(res.total).toEqual(1);
		});

		const req = httpTestingController.expectOne(`http://localhost:3000/products?text=101&page=1&perPage=10`);

		req.flush(mockPaginatedResponseProduct);
	});
});
