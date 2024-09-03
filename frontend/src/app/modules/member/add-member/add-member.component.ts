import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

addMember=this.form.group({
  memberId :'',
  name :'',
  email :''
})


constructor(private form:FormBuilder,private api:MemberService,private router:Router){}

add(){
  this.api.addUsers(this.addMember.value).subscribe({
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
        title: "Member added successfully"
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
