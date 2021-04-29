import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'blue';
  bgcolor = 'red';
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParams)=> {
      this.defaultColor = mesParams.defaultColor;
      this.bgcolor = this.defaultColor;
    });
  }
  changeColor(newColor: string): void {
    this.bgcolor = newColor;
  }
}
