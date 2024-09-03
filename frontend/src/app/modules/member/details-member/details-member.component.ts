import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-details-member',
  templateUrl: './details-member.component.html',
  styleUrls: ['./details-member.component.css']
})
export class DetailsMemberComponent implements OnInit{

  allMembers:any=[];

  constructor(private api:MemberService){}

  ngOnInit(): void {
    this.viewAllMembers();
  }

  viewAllMembers=()=>{
    this.api.getallUser().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allMembers=res
      },

      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }



  // delete

  delete(id:any){
this.api.deleteUser(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.viewAllMembers();
    alert('deleted')
  },
  error:(err:any)=>{
    console.log(err);
    alert('invalid')
  }
})
  }


}
