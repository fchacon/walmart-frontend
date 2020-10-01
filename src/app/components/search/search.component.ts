import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AppSettings } from 'src/app/config/app.settings';
import { forEach as _forEach } from 'lodash-es';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	@Output()
	search = new EventEmitter<string>();

	public logoUrl: string;
	public form: FormGroup;

	constructor(public sanitizer: DomSanitizer, private formBuilder: FormBuilder) {
		this.logoUrl = AppSettings.IMAGES_PATH + 'logo.svg';
		this.crearFormulario();
	}

	ngOnInit(): void {}

	private crearFormulario(): void {
		this.form = this.formBuilder.group({
			text: [''],
		});

		_forEach(this.form.controls, (control: AbstractControl) => control.markAsPristine());
	}

	public submitSearch(): void {
		if (this.form.valid) {
			this.search.emit(this.form.controls.text.value);
		} else {
			_forEach(this.form.controls, (control: AbstractControl) => control.markAsDirty());
		}
	}

	public handleFormKeydown(event): void {
		if (event.keyCode === 13) {
			this.submitSearch();
		}
	}
}
