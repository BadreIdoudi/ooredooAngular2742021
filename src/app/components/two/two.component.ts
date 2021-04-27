import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  two = 'valeur initiale';
  constructor() {}
  changeInput(): void {
    this.two = 'new value';
  }
  ngOnInit(): void {}
}
