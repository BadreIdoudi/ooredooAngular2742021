import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() cv: Cv = null;
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectItemSubject.pipe(
      distinctUntilChanged()
    ).subscribe(
      (newCv) => {
        this.cv = newCv;
        console.log(newCv);
      }
    )
  }
}
