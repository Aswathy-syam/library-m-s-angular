import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit{

  memberId:any;
  updateForm=this.form.group({
    memberId:'',
name:'',
email:'',

  })

 constructor(private form:FormBuilder,private api:MemberService,private route:ActivatedRoute,private router:Router){}

 ngOnInit(): void {
  
  this.memberId=this.route.snapshot.paramMap.get("id")
  console.log(this.memberId);
  

  //single user

  this.api.getsingleUser(this.memberId).subscribe({
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
  this.api.updateUser(this.updateForm.value,this.memberId).subscribe({
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
        title: "Member updated successfully"
      });
      




      this.router.navigateByUrl('/member/details')
      
    },
    error:(err:any)=>{
      console.log(err);
      alert('invalid')
      
    }
  })

}


}
