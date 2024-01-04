import { Component } from '@angular/core';
import todo from '../data';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  todos =  todo;
  public name = "Yesuf";
  public name1 = "Alemu";

  public isdisabled = true;

greeting()
  {
    return "Welcome " +this.name;
  }

  public greetingButton = "";

  onClick() 
  {
    console.log("task created");
  }

  greetUser(){
    return "Hello " + this.name1;
  }

}
