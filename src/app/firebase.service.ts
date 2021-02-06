import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: any = [];
  constructor(private firestore: AngularFirestore) { }

  getUserList() {
    return this.firestore.collection('/users').snapshotChanges();
  }
  addUser(newUser: any) {
    return this.firestore.collection('/users').add(newUser)
  }
  updateUser(userId: any, user: any) {
    this.firestore.doc('/users/' + userId).update(user);
  }
  deleteUser(userId: any) {
    this.firestore.doc('/users/' + userId).delete();
  }
  //deleteUser(user: User) { }
  // getUsersList() {
  //   return this.db.list('/users');
  // }

  // addUser(newUser: any) {
  //   let date = new Date();
  //   return this.db.list('/users/').push({
  //     avatar: "newUser.avatar",
  //     crDate: date.toDateString(),
  //     email: newUser.email,
  //     name: newUser.name,
  //     role: newUser.role,
  //     status: newUser.status
  //   })
  // }

  // deleteUser(user: User) {
  //   console.log(this.users)
  //   const index: number = this.users.indexOf(user);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //   }
  //   return this.getUsersList()
  //     .valueChanges()
  //     .subscribe(users => {
  //       users = this.users;
  //       console.log(users)
  //     })
  // }

}

// {
//   avatar: "newUser.avatar",
//   crDate: date.toDateString(),
//   email: newUser.email,
//   name: newUser.name,
//   role: newUser.role,
//   status: newUser.status
// }