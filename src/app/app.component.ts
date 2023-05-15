import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-colleges';
  Cities = ["Chennai","Mumbai","Pune","Kolkata"];
  cityInput: any;
  nameInput: any;
  colleges: any;
  
  handleClick(nameref: any, cityref:any){

    this.cityInput = cityref.value;
    this.nameInput = nameref.value;
    
    console.log("print"+"hello"+this.cityInput+this.nameInput)
   
  }
 
}
