import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: any = [];
  usersUrl = '/users/';
  constructor(private firestore: AngularFirestore) { }
  currentUserIdToupdate: any;
  getUserList() {
    return this.firestore.collection(this.usersUrl).snapshotChanges();
  }
  addUser(newUser: any) {
    return this.firestore.collection(this.usersUrl).add(newUser)
  }
  updateUser(userId: any, user: any) {
    this.firestore.doc(this.usersUrl + userId).update(user);
  }
  deleteUser(userId: any) {
    this.firestore.doc(this.usersUrl + userId).delete();
  }
  getUser(userId: any) {
    return this.firestore.collection(this.usersUrl).doc(userId).get();
  }

}

