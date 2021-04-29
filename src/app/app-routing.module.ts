import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { AuthGuard } from './guards/auth.guard';

// cv

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddPersonneComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id', component: DetailPersonneComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniwordComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
