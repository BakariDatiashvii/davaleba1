import { Component } from '@angular/core';
import { Person, } from './interfase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  personData: Person = {
    name: "Dennis Schulist",
    isStudent: false,
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: 23505-1337,
    },
  };

  showChild: boolean = false;

  makeStudent() {
    this.personData.isStudent = true;
    this.showChild = true;
  }

  
}
