import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent=new CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CalculatorComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CalculatorComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  beforeAll(()=>{
    expect(component.first).toBeNull();
    expect(component.second).toBeNull();
  })

  it('Add two numbers properly',()=>{
    expect(component.add(5,5)).toEqual(10);
  })
  it('Subtract two numbers properly',()=>{
    expect(component.subtract(5,5)).toEqual(0);
  })
  it('Multiply two numbers properly',()=>{
    expect(component.multiply(5,5)).toEqual(25);
  })
  it('Divide two numbers properly',()=>{
    expect(component.divide(5,5)).toEqual(1);
  })
});
