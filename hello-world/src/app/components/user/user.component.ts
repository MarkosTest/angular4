import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:{
    street:string,
    city:string,
    state:string
  } 

  constructor() { }

  ngOnInit() {
    this.name = 'Markos';
    this.age = 30;
    this.email = 'marcos@mail.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }

}
