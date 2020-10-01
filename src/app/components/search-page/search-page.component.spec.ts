import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchPageComponent } from './search-page.component';
import { ProductsService } from 'src/app/services/products.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('SearchPageComponent', () => {
	let component: SearchPageComponent;
	let fixture: ComponentFixture<SearchPageComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [SearchPageComponent],
				imports: [HttpClientTestingModule],
				providers: [ProductsService],
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call getPostDetails and get response as array', fakeAsync(() => {
		const service = fixture.debugElement.injector.get(ProductsService);
		spyOn(service, 'getProducts').and.callFake(() => {
			return of({ data: [], total: 0 }).pipe(delay(500));
		});
		component.searchProducts('', 1);
		tick(1000);
		expect(component.totalProducts).toEqual(0);
		expect(component.products).toEqual([]);
	}));
});
