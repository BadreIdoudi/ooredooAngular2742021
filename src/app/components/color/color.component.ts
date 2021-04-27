import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'blue';
  bgcolor = 'red';
  constructor() {}

  ngOnInit(): void {
    this.bgcolor = this.defaultColor;
  }
  changeColor(newColor: string): void {
    this.bgcolor = newColor;
  }
}
