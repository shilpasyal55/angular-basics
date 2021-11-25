import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  name = "shilpa"; // deafult  string
  imgUrl:string = '';
  inputValue:string = "before";
  enterName;
  show = false;
  color:string;
  green = "green"

  names = ["aman","shilpa","ashu"]
  constructor() {
    this.color = "green"
  }

  changeme() {
    this.show = !this.show;
  }

  ngOnInit() {
    //api hit
    this.imgUrl = "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"

    // setTimeout(()=> this.inputValue = "after",7000)
  } 

  getname() {
    console.log(this.inputValue);
  }

}
