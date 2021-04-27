import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  message = 'cc';
  isHidden = false;
  buttonMessage = 'hide';
  constructor() {}

  ngOnInit(): void {}
  showHide(): void {
    this.isHidden = !this.isHidden;
    this.buttonMessage === 'hide' ? this.buttonMessage = 'show' : this.buttonMessage = 'hide';
  }
}
