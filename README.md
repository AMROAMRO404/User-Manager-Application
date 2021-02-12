# UserManagerApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.


## Develop an Angular application "User Manager" that basically (as the name implies) used to manage users.

### This repo is part of the PSEU training. Project description:
### The application should contain and consider the following:

* Top Nav-bar with the following items: Home, Users and About.
* Each item will navigate to a separate component (Angular component).
* Home should have welcome text and two quick action items:
     * Search text box to quickly find a user.
     * Big "Add new user" button. 
* Users component should have a data table with the following columns:
     Id, Name, Email, Role, Status, Creation Date and Action. 
* In Name column display the name of the user and the image/avatar to the left (as in above image).
* There should be at least one component that has form to add/edit user's info (including  upload user image).
* All form(s) fields should be validated properly.
* In About component put a few lines about yourself and how you implement this project.
* Data should be stored and retrieved from Firebase.
* Role dropdown (it should be a dropdown), use the following items: User, Administrator
* Status dropdown, use: Active, Locked, Disable