import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import this for *ngFor

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Fix for ngModel
    CommonModule  // Fix for *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
