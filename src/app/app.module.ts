import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
	declarations: [AppComponent, SearchComponent, SearchPageComponent, SearchResultComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, PaginatorModule],
	providers: [ProductsService],
	bootstrap: [AppComponent],
})
export class AppModule {}
