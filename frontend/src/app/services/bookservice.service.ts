import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  getAvailableBooks() {
    throw new Error('Method not implemented.');
  }

SERVER_URL="http://localhost:4000"

  constructor(private http:HttpClient) { }


//add book

addBook=(book:any)=>{
return this.http.post(`${this.SERVER_URL}/add-book`,book)
}


//get all book

getAllBook=()=>{
  return this.http.get(`${this.SERVER_URL}/getAll-book`)
}

//delete book

deleteBook=(id:any)=>{
  return this.http.delete(`${this.SERVER_URL}/delete-book/${id}`)
}

//update book

updateBook=(book:any,id:any)=>{
  return this.http.put(`${this.SERVER_URL}/update-book/${id}`,book)
}


//single book

singleBook=(id:any)=>{
return this.http.get(`${this.SERVER_URL}/single-book/${id}`)
}

//assign book

// assignBook(bookId: string, memberId: string): Observable<any> {
//   return this.http.post(`${this.SERVER_URL}/asigned`, { bookId, memberId });
// }




//   borrowBook

// borrowBook=(id:any,userId: string)=>{
//   return this.http.post(`${this.SERVER_URL}/borrow/${id}`,{ userId })
// }

//  returnBookById

// returnBookById=(id:any,userId: string)=>{
//   return this.http.post(`${this.SERVER_URL}/return/${id}`,{ userId })
// }


// getbook id

// getBookById(id: string) {
//   return this.http.get(this.SERVER_URL + '/getBookById' + id);
// }


//available book
// availableBook() {
//   return this.http.get(`${this.SERVER_URL}/available`)
// }


}
