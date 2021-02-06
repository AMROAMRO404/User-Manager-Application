import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: any[] = [];
  user: any;
  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.firebaseService.getUserList().subscribe(data => {
      this.users = data.map((element: any) => {
        return {
          id: element.payload.doc.id,
          avatar: "newUser.avatar",
          email: element.payload.doc.data()['email'],
          name: element.payload.doc.data()['name'],
          role: element.payload.doc.data()['role'],
          status: element.payload.doc.data()['status'],
          creationDate: element.payload.doc.data()['creationDate'],
        }
      })
    })
  }
  deleteUser(userNumber: any) {
    this.firebaseService.deleteUser(userNumber.id)
  }

}
