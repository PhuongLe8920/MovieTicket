import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from '../guards/auth.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';


const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path:'dash-board',
        component: DashBoardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'add-user/:id',
        component: AddUserComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
