import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group ({
    name: [''],
    email: [''],
    password: [''],
    adress: this.fb.group ({
      street: [''],
      zipCode: [''],
      city: [''],
    }),
  });

  onSubmit() {
    let result = this.userForm.value;
    console.log(result);
    this.userService.addUser(result);
  }
}
