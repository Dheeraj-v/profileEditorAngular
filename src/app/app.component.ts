import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Profile Editor';
  title2:string = 'User Information';
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  user:User = {
    name:'John',
    age:25,
    favouriteColor: 'red',
    gender: 'male',
    month:'February'
  };
  displayEdit:boolean = false;

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }

  
}

