import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  searchKey:string="";
  allBooks:any=[]

  constructor(private api:BookserviceService){}

ngOnInit(): void {
  this.viewAllBooks();
}


viewAllBooks=()=>{
this.api.getAllBook().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.allBooks=res
    
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
}



// delete

delete(id:any){
  this.api.deleteBook(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.viewAllBooks();
      alert('deleted')
    },
    error:(err:any)=>{
      console.log(err);
      alert('invalid')
      
    }
  })
}
}
