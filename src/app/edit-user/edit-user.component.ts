import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }
  userToUpdate: any;
  userId: any;
  ngOnInit(): void {
    this.userId = this.firebaseService.currentUserIdToupdate;
    console.log(this.userId)
    this.firebaseService.getUser(this.userId).subscribe(doc => {
      if (doc.exists) {
        this.userToUpdate = doc.data();
      } else {
        console.log("No such document!");
      }
    })
  }
  updateUser(userForm: any) {
    this.firebaseService.updateUser(this.userId, userForm);
    this.router.navigate(['/users'])
  }

}
