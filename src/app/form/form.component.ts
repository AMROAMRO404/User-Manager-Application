import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerUser(userForm: NgForm) {
    console.log(userForm.value)
  }

}
