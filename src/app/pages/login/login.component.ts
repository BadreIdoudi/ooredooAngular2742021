import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  processForm(formulaire: NgForm): void {
    this.authService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.router.navigate(['cv']);
      },
      (erreur) => this.toaster.error('veuillez vérifier vos credentials')
    );
  }

}
