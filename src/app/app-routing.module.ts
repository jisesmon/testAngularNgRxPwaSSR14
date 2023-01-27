import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenComponent } from './pen/pen.component';

const routes: Routes = [
  {path:'pen',component:PenComponent},
  {
    path: '',
    loadChildren: () =>
      import('./books/books.module').then((b) => b.BooksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
