import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ReportComponent } from './report/report.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AssignBookComponent } from './assign-book/assign-book.component';





const routes: Routes = [

{path:"",component:HomeComponent},
{path:"user/book",component:BooksComponent},
{path:"user/report",component:ReportComponent},
{path:"user/add",component:AddComponent},
{path:"user/edit/:id",component:EditComponent},
{path:"user/assign/:id",component:AssignBookComponent},





{ path: 'member', loadChildren: () => import('./modules/member/member.module').then(m => m.MemberModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
