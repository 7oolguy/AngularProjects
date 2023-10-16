import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent {
  
  person = {
    name: "",
    lastname: "",
    age: 0
  }
  
  onNameChange(event: any){
    this.person.name = event.target.value;
  }
  onLNameChange(event:any){
    this.person.lastname = event.target.value;
  }

  diminuiNum(event: any){
    if(this.person.age > 0){
      this.person.age--;
    }
  }
  aumentaNum(event: any){
    this.person.age++;
  }
}
