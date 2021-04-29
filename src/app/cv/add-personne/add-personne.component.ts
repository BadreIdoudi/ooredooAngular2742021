import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  addPersonne(formumaire: NgForm): void {
    this.cvService.addCv(formumaire.value).subscribe(
      (cv) => {
        this.toaster.success(
          `le cv de ${formumaire.value.firstname} ${formumaire.value.name} a été ajouté avec succès `
        );
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error('pbm avec le serveur veuillez contacter l admin');
        console.log(erreur);
      }
    );
  }
}
