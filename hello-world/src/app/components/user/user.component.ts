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
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() { }

  ngOnInit() {
    this.name = 'Markos';
    this.age = 30;
    this.email = 'marcos@mail.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Read', 'Programming', 'Outdoor Activities'];
    this.hello = 'Hello';
  }

  onClick(){
    console.log('Hello!');
    this.hobbies.push('Swimming')
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}