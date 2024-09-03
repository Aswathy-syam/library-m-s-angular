import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  
  members: any ;
  allBooks:any;
  assignedBooks: any[] = [];
  unassignedBooks: any[] = [];

  constructor(private api:BookserviceService,private memberService:MemberService){}

ngOnInit(): void {
  this.viewAllBooks();
  this.getMembers();
}


viewAllBooks=()=>{
this.api.getAllBook().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.allBooks=res
    console.log(this.allBooks.author);
    

    
    
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})
}

getMembers=()=>{
  this.memberService.getUser().subscribe({

    next:(res:any)=>{
      console.log(res);
      this.members=res
      // this.members.forEach((member: { _id: string | number; }) => {
      //       this.members[member._id] = member;
      //     });
      
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }

  })


// this.memberService.getUser.subscribe((members) => {
//   members.forEach((member) => {
//     this.members[member._id] = member;
//   });
// });
// }

}
}
