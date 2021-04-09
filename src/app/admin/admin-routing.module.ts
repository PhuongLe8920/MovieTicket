import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from '../guards/auth.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { UserManagementComponent } from './user-management/user-management.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';


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
        path: 'user-management',
        component: UserManagementComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'movie-management',
        component: MovieManagementComponent,
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
