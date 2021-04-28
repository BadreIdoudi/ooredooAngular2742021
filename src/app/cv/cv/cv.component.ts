import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { Logger } from '../../services/logger';
import { HelperService } from '../../services/helper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  date = new Date();
  constructor(
    private logger: Logger,
    private helper: HelperService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.logger.logger('cc je suis le cvComponent');
    this.helper.sayHello();
    this.toaster.info(`Hello in our cvTech :D`);
  }
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
