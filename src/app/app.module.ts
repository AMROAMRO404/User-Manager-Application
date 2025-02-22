import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersComponent,
    AboutComponent,
    FormComponent,
    NavbarComponent,
    SearchComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebase
    ),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule,
    Ng2SearchPipeModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
