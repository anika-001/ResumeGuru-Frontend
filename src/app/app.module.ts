import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { ForumComponent } from './forum/forum.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PrevpdfComponent } from './prevpdf/prevpdf.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ProjectUploadComponent } from './project-upload/project-upload.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { ReviewComponent } from './review/review.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { ReviewProjectComponent } from './review-project/review-project.component';
import { ReviewResumeComponent } from './review-resume/review-resume.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';
>>>>>>> 83c26fec21477b379f772a861e63d9d1139af5e8

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
    AnalyseComponent,
    ProjectUploadComponent,
    ResumeUploadComponent,
    ReviewComponent,
    NavbarComponent,
    ReviewProjectComponent,
    ReviewResumeComponent,
    ResumeComponent,
    ProjectComponent
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
    NgxExtendedPdfViewerModule,
    ChartsModule,
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
