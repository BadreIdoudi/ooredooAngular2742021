import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

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
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getCvById(+params.id).subscribe(
          (cv) => this.personne = cv,
          (erreur) => this.router.navigate(['cv'])
        );
      }
    );
  }
  deletePersonne(): void {

    this.cvService.deleteCv(this.personne.id).subscribe(
      (data) => {
        console.log(data);
        this.toaster.success('cv supprimé avec succès');
        this.router.navigate(['cv']);
      },
      (erreur) => console.log(erreur)
    );

  }

}
