import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { DetailsMemberComponent } from './details-member/details-member.component';

const routes: Routes = [{ path: '', component: MemberComponent },
{path:"details",component:DetailsMemberComponent},
  {path:"add",component:AddMemberComponent},
  {path:"edit/:id",component:EditMemberComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
