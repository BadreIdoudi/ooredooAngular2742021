import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderObservable: Observable<string> = null;
  @Input() timer = 1000;
  @Input() size = 150;
  paths = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'as.jpg',
    '404.png',
    'cv.png',
  ];
  constructor() { }

  ngOnInit(): void {
    this.sliderObservable = new Observable(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            if(i === this.paths.length) {
              i = 0;
            }
            observer.next(this.paths[i++]);
          },
          this.timer
        );
      }
    );

  }

}
