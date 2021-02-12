import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  users: any = [];
  constructor(private firestore: AngularFirestore) { }
  currentUserIdToupdate: any;
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
  getUser(userId: any) {
    return this.firestore.collection('/users/').doc(userId).get();
  }

}

