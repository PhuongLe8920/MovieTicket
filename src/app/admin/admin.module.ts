import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';


@NgModule({
  declarations: [AdminComponent, LoginComponent, HeaderAdminComponent, DashBoardComponent, UserManagementComponent, MovieManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LoginComponent, AdminComponent, DashBoardComponent, UserManagementComponent
  ]
})
export class AdminModule { }
