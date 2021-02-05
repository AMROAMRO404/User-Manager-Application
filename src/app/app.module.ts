import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRowComponent } from './user-row/user-row.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersComponent,
    AboutComponent,
    FormComponent,
    NavbarComponent,
    UserRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebase
    ),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
