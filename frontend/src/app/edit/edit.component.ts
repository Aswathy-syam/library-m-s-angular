import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookserviceService } from '../services/bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
bookId:any;

updateForm=this.form.group({
  bookId:'',
  title:'',
  author:'',
  price:'',
  isAssigned:'',
  assignedTo:''

})

  constructor(private form:FormBuilder,private api:BookserviceService,private route:ActivatedRoute,private router:Router){}

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
      title: "book updated successfully"
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
