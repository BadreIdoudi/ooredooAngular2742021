import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
/*   @Output() selectCv = new EventEmitter(); */
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {}
  selectItem(): void {
    this.cvService.selectItem(this.cv);
    /* this.selectCv.emit(this.cv); */
  }
}
