import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { SearchPipe } from './transform/search.pipe';
import { AssignBookComponent } from './assign-book/assign-book.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
   
    ReportComponent,
    NavbarComponent,
    AddComponent,
    EditComponent,
    
    SearchPipe,
         AssignBookComponent,
        
   
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
