import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  message = 'cc';
  isHidden = false;
  buttonMessage = 'hide';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  showHide(): void {
    this.isHidden = !this.isHidden;
    this.buttonMessage === 'hide'
      ? (this.buttonMessage = 'show')
      : (this.buttonMessage = 'hide');
  }
  alertInputValue(inputValue: string): void {
    alert(inputValue);
  }

  navigate(): void {
    this.router.navigate(['/cv']);
  }
}
