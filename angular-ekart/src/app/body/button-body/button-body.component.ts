import { Component } from '@angular/core';
import { BodyComponent } from '../body.component';

@Component({
  selector: 'app-button-body',
  templateUrl: './button-body.component.html',
  styleUrls: ['./button-body.component.less']
})
export class ButtonBodyComponent {
  constructor(private BodyComponent: BodyComponent) {}
  
  content = {
    name: "",
    lastname: "",
    age: 0  
  }
  sendContent(event: any){
    this.content.name = this.BodyComponent.person.name;
    this.content.lastname = this.BodyComponent.person.lastname;
    this.content.age = this.BodyComponent.person.age;
  }
  age(){
    if ( this.content.age >= 18 ){
      return "The person is an Adult";
    }
    else{
      return "The person is a Kid";
    }
  }
}
