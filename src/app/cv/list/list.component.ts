import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile2.png',
        38,
        1234
      ),
      new Cv(
        2,
        'chaouachi',
        'amira',
        'Dev',
        'rotating_card_profile.png',
        22,
        1258
      ),
      new Cv(
        3,
        'mejri',
        'marwen',
        'Dev',
        'rotating_card_profile3.png',
        24,
        5874
      ),
    ];
  }
  forwardItem(cv: Cv): void {
    this.forwardCv.emit(cv);
  }
}
