import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
/*   @Output() forwardCv = new EventEmitter(); */
  constructor(
    private cvService: CvService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvs) => this.cvs = cvs,
      (erreur) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toaster.warning('Les data sont fake, veuillez contacter l admin');
      }
    );
  }
/*   forwardItem(cv: Cv): void {
    this.forwardCv.emit(cv);
  } */
}
