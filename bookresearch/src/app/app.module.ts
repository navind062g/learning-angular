import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AgecalculatorComponent } from './agecalculator/agecalculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { ButtonColorDirective } from './button-color.directive';
import { Day1Component } from './day1/day1.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImageGalleryDirective } from './image-gallery.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    AgecalculatorComponent,
    DirectivesComponent,
    ButtonColorDirective,
    Day1Component,
    ImageDisplayComponent,
    ImageGalleryDirective
  ], // Add your component here
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
