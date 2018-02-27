import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  answer:number;
  operation:string;
  first:string=null;
  second:string=null;

  constructor() { }

  ngOnInit() {
  }

  calculate(){
    if(this.first==null){
      alert("Please Enter First number");
    }
    if(this.second==null){
      alert("Please Enter second number");
    }
    if(this.operation=='+'){
      this.answer=this.add(parseInt(this.first),parseInt(this.second));
    }
    else if(this.operation=='-'){
      this.answer=this.subtract(parseInt(this.first),parseInt(this.second));
    }
    else if(this.operation=='*'){
      this.answer=this.multiply(parseInt(this.first),parseInt(this.second));
    }
    else if(this.operation=='/'){
      this.answer=this.divide(parseInt(this.first),parseInt(this.second));
    }
  }

  add(a,b){
    return a+b;
  }
  subtract(a,b){
    return a-b;
  }
  multiply(a,b){
    return a*b;
  }
  divide(a,b){
    return a/b;
  }
}
