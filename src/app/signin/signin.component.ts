import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnChanges {

  @Input() parentValue: string = '';
  @Output() parentValueChange: EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(changes: SimpleChanges): void {
  // console.log(this.data);
}
childValue:any= '';

// get childValue(): string {
//   return this.parentValue;
// }

// set childValue(value: string) {
//   this.parentValue = value;
//   this.parentValueChange.emit(value);
// }
onChildValueChange(newValue: string): void {
  this.childValue = newValue;
  // console.log(newValue);
  console.log(this.childValue);
  this.parentValueChange.emit(newValue);
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}





}


