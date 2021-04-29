import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Cv = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.getCvById(+params.id);
        if (!this.personne) {
          this.router.navigate(['cv']);
        }
      }
    );
  }
  deletePersonne(): void {
    this.toaster.success('cv supprimé avec succès');
    this.cvService.deleteCv(this.personne);
    this.router.navigate(['cv']);
  }

}
