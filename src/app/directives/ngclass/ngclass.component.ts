import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  isAllume = false;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.isAllume = !this.isAllume;
    }, 1500);
  }
}
