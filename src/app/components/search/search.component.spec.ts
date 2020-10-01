import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [SearchComponent],
				providers: [FormBuilder],
			})
				.compileComponents()
				.then(() => {
					fixture = TestBed.createComponent(SearchComponent);
					component = fixture.componentInstance;
				});
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(
		`should have a form created`,
		waitForAsync(() => {
			fixture = TestBed.createComponent(SearchComponent);
			component = fixture.debugElement.componentInstance;
			expect(component.form).toBeDefined();
		})
	);

	it(
		`should have a logoUrl equals to './assets/images/logo.svg'`,
		waitForAsync(() => {
			fixture = TestBed.createComponent(SearchComponent);
			component = fixture.debugElement.componentInstance;
			expect(component.logoUrl).toEqual('./assets/images/logo.svg');
		})
	);

	it('should correctly @Output value of text input in component', () => {
		spyOn(component.search, 'emit'); // 1
		const button = fixture.nativeElement.querySelector('button');
		component.form.controls.text.setValue('101');
		const inputText = component.form.controls.text.value;

		button.click(); // 3
		fixture.detectChanges();

		expect(component.search.emit).toHaveBeenCalledWith(inputText); // 4
	});
});
