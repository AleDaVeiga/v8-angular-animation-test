import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    HttpClientModule, 
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
