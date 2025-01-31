import { Component } from '@angular/core';

@Component({
  selector: 'app-supers',
  standalone: false,
  templateUrl: './supers.component.html',
  styleUrl: './supers.component.css'
})
export class SupersComponent {

  backgroundColor:string = "green";
  hero:string = "batman";

  changeColor() {
    if (this.backgroundColor == "green"){
      this.backgroundColor ="blue";
    }else if(this.backgroundColor == "blue"){
      this.backgroundColor = "red";
    }else if (this.backgroundColor == "red"){
      this.backgroundColor = "green";
    }
  }

  changeHero(newName:string) {
    this.hero = newName;
  }
}
