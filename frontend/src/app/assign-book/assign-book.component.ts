import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookserviceService } from '../services/bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-book',
  templateUrl: './assign-book.component.html',
  styleUrls: ['./assign-book.component.css']
})
export class AssignBookComponent {

  selectedBookId?: number;
  selectedMemberId?: number;
  members: any;
bookId:any;

assignedBooks: any;
books: any[] = [];


updateForm=this.form.group({
  title:'',
   isAssigned:'',
  assignedTo:'',
 

})

  constructor(private form:FormBuilder,private api:BookserviceService,private route:ActivatedRoute,private router:Router,private memberService:MemberService){}

ngOnInit(): void {
  this.bookId=this.route.snapshot.paramMap.get('id')
  console.log(this.bookId);
  

  this.api.singleBook(this.bookId).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.updateForm.patchValue(res)
     
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })

  this.getMembers();
 
}



getMembers=()=>{
  this.memberService.getallUser().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.members=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
  }


  













  saveChanges(){
  this.api.updateBook(this.updateForm.value,this.bookId).subscribe({
    next:(res:any)=>{
      console.log(res);
    


    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "assigned successfully"
    });
      
this.router.navigateByUrl('/user/book')


  },
  error:(err:any)=>{
    console.log(err);
    alert('invalid')
    
  }
})




}


}
























