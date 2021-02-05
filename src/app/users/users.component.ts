import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  constructor(db: AngularFireDatabase) {
    db.list('/users')
      .valueChanges()
      .subscribe(users => {
        this.users = users;
        console.log(this.users)
      })
  }

  ngOnInit(): void {
  }

}
