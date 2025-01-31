import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  courses: any[] = [
    { id: 1, name: "Typescript"},
    { id: 2, name: "Angular"},
    { id: 3, name: "React JS"},
    { id: 4, name: "Vue JS"}
  ];
}
