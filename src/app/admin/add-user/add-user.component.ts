import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('formDangKy') formDK!: NgForm;

  listUser: any[] = [];
  id = '';
  item: any;
  isUpdating = false;

  constructor(private accService: AccountService, private router: Router,  private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.accService.getListUser().subscribe((result: any) => {
      console.log(result)
      this.listUser = result;
    })
  }


  checkDeactivate() {
    return this.formDK.submitted;
  }

  signUp(form: any) {
    console.log(form)
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      soDt: form.value.sdt,
      maLoaiNguoiDung: form.value.maLoaiNguoiDung,
      maNhom: form.value.maNhom,
    }
    this.listUser.push(objUser);
    console.log(this.listUser)
    this.formDK.reset();
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.accService.signUp(objUser).subscribe(data => {
      console.log(data);
      // if(data) {
      //   localStorage.setItem('user', JSON.stringify(data));
      //   this.router.navigate(['/admin/add-user/:id'])
      // }
      if(!data) {
        alert('Thêm người dùng thất bại!')
      }
    })
  }
  findIndex = (id: any) =>{
    return this.listUser.findIndex((item)=>{
      return item.id === id;
    })
  }

  updateUser(form: any) {
    console.log(form)
    const objUser = {
      taiKhoan: form.value.taiKhoan,
      matKhau: form.value.matKhau,
      hoTen: form.value.hoTen,
      email: form.value.email,
      soDt: form.value.sdt,
      maLoaiNguoiDung: form.value.maLoaiNguoiDung,
      maNhom: form.value.maNhom,
    }
    // this.formDK.reset();
    console.log(objUser)
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.accService.updateUser(objUser).subscribe(data => {
      const index = this.findIndex(objUser);
      console.log(index, data);
      this.listUser.splice(this.listUser[index])
      this.listUser = [...this.listUser,data];
      // if(index !== -1) {
      //   this.listUser[index] = data;
      // }
      // else {
      //   alert('Cập nhật người dùng thất bại!')
      // }
    })
  }


  delete(tk: any) {
    console.log(tk);
    this.accService.deleteUser(tk).subscribe(response => {
      this.listUser = [...this.listUser.splice(tk)]
      console.log(this.listUser);
      return this.listUser;
    })
  }

  updateForm(user:any) {
    console.log(user)
    this.isUpdating = true;
    let matKhau = user.getAttribute('data-matKhau')
    let taiKhoan = user.getAttribute('data-taiKhoan')
    let hoTen = user.getAttribute('data-hoTen')
    let email = user.getAttribute('data-email')
    let soDt = user.getAttribute('data-sdt')
    let maNhom = user.getAttribute('data-maNhom')
    let maLoaiNguoiDung = user.getAttribute('data-maLoai')
    this.formDK.setValue({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      hoTen: hoTen,
      email: email,
      sdt: soDt,
      maNhom: maNhom,
      maLoaiNguoiDung: maLoaiNguoiDung,
    })
  }

}
