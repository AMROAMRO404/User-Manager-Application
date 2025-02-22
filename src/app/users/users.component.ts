import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private firebaseService: FirebaseService, private router: Router) { }
  user: any
  ngOnInit(): void {
    this.firebaseService.getUserList().subscribe(data => {
      this.users = data.map((element: any) => {
        return {
          id: element.payload.doc.id,
          avatar: element.payload.doc.data()['avatar'],
          email: element.payload.doc.data()['email'],
          name: element.payload.doc.data()['name'],
          role: element.payload.doc.data()['role'],
          status: element.payload.doc.data()['status'],
          creationDate: element.payload.doc.data()['creationDate'],
          imageUrl: element.payload.doc.data()['imageUrl'],
        }
      })
    })
  }
  deleteUser(userNumber: any) {
    if (confirm(`Are you sure to delete ${userNumber.name} ?`))
      this.firebaseService.deleteUser(userNumber.id)
  }

  onUpdate(userId: any) {
    this.firebaseService.currentUserIdToupdate = userId;
    this.router.navigate(['/edit-user'])
  }


}
