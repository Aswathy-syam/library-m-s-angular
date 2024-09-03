import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  SERVER_URL="http://localhost:4000"

  user: any;
  constructor(private http:HttpClient) { }




  // add user
  addUsers=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/add`,user)
  }

  //get all user

  getallUser=()=>{
    return this.http.get(`${this.SERVER_URL}/get`)
  }


  //delete user

  deleteUser=(id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/delete/${id}`)
  }

  //update user

  updateUser=(user:any,id:any)=>{
    return this.http.put(`${this.SERVER_URL}/update/${id}`,user)
  }

  //get single user

  getsingleUser=(id:any)=>{
    return this.http.get(`${this.SERVER_URL}/single-user/${id}`)
  }


  setUser(user: any) {
    // this.userSubject.next(user);
    this.user = user;
  }
  getUser() {
    return this.user;
  }

  
  getBorrowedBooks(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.SERVER_URL}/borrowed/${userId}`).pipe(
      tap((response: any) => { console.log('borrowed', response) })
    );
  }
}
