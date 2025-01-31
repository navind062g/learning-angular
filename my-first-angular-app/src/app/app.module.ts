import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SupersComponent } from './supers/supers.component'; // Import your component
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SupersComponent], // Add your component here
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }