import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { User } from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {

  }
  date = new Date();
  creationDate = this.date.toDateString()

  user = {};
  registerUser(userForm: NgForm) {
    console.log(userForm.value)
    this.firebaseService.addUser(userForm.value)
    this.router.navigate(['/users'])
  }


}
