import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniwordComponent } from './directives/miniword/miniword.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

// word

const routes: Routes = [
  { path: ':monPath', component: SecondComponent },
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniwordComponent },
  { path: 'color', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
