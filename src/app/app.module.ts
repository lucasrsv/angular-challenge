import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { environment } from 'src/environments/environment'


//Components
import { AppComponent } from './app.component'
import { CommentListComponent } from './comment-list/comment-list.component'

//Firebase and Friestore
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
