import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookserviceService } from '../services/bookservice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  members: any;
selectedMemberId?: number;

addForm=this.form.group({

  bookId:'',
  title:'',
  author:'',
  price:'',
  isAssigned:'',
  assignedTo:''

})



constructor(private form:FormBuilder,private api:BookserviceService,private router:Router,private memberService:MemberService){}


ngOnInit(): void {
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



add(){
  this.api.addBook(this.addForm.value).subscribe({
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
        title: "book added successfully"
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
