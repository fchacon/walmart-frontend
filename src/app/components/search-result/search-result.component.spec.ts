import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
	let component: SearchResultComponent;
	let fixture: ComponentFixture<SearchResultComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [SearchResultComponent],
				providers: [FormBuilder],
			})
				.compileComponents()
				.then(() => {
					fixture = TestBed.createComponent(SearchResultComponent);
					component = fixture.componentInstance;
				});
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchResultComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should correctly @Output value of page', () => {
		spyOn(component.changePage, 'emit'); // 1
		const pageIndex = 1;

		component.paginate({ page: pageIndex });
		fixture.detectChanges();

		expect(component.changePage.emit).toHaveBeenCalledWith(pageIndex + 1); // 4
	});

	it('should correctly getImageUrl', () => {
		expect(component.getImageUrl('www.google.cl')).toEqual('http://www.google.cl');
	});

	it('should correctly getPrice', () => {
		expect(component.getPrice('CLP1,000')).toEqual('$1.000');
		expect(component.getPrice('CLP500')).toEqual('$500');
	});
});
