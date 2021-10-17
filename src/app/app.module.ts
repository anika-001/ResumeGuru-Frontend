import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { ForumComponent } from './forum/forum.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PrevpdfComponent } from './prevpdf/prevpdf.component';
<<<<<<< HEAD
import { ProjectsurveyComponent } from './projectsurvey/projectsurvey.component';
import { AnalyseComponent } from './analyse/analyse.component';
=======
import { ProjectUploadComponent } from './project-upload/project-upload.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { ReviewComponent } from './review/review.component';
>>>>>>> 39dd6f7438e6ff20416c2fbfd7924c3fca1dea08

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    PdfViewerComponent,
    ResumeformComponent,
    ProfilesiteComponent,
    ForumComponent,
    PrevpdfComponent,
<<<<<<< HEAD
    ProjectsurveyComponent,
    AnalyseComponent
=======
    ProjectUploadComponent,
    ResumeUploadComponent,
    ReviewComponent
>>>>>>> 39dd6f7438e6ff20416c2fbfd7924c3fca1dea08
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PdfViewerModule,
    MatSlideToggleModule,
    NgxExtendedPdfViewerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
