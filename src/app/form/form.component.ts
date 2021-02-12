import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';   //   import <<<<

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router, private fireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }



  date = new Date();
  creationDate = this.date.toDateString()
  basePath = '/images';
  downloadableURL = '';
  task: any;
  async onFileChanged(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;  // path at which image will be stored in the firebase storage
      this.task = this.fireStorage.upload(filePath, file);    // upload task
      // this.progress = this.snapTask.percentageChanges();
      (await this.task).ref.getDownloadURL()
        .then((url: any) => { this.downloadableURL = url; });  // <<< url is found here

    } else {
      alert('No images selected');
      this.downloadableURL = '';
    }
  }
  user = {};
  formToSubmit: any
  registerUser(userForm: NgForm) {
    console.log(userForm.value)
    this.formToSubmit = userForm.value
    userForm.value['imageUrl'] = this.downloadableURL
    this.firebaseService.addUser(this.formToSubmit)
    this.router.navigate(['/users'])
  }
}
