import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { convertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent, 
    convertToSpacesPipe, 
    StarComponent,
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
