import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { ForumComponent } from './forum/forum.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PrevpdfComponent } from './prevpdf/prevpdf.component';
<<<<<<< HEAD
import { ProjectsurveyComponent } from './projectsurvey/projectsurvey.component';
import { AnalyseComponent } from './analyse/analyse.component';
=======
import { ProjectUploadComponent } from './project-upload/project-upload.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { ReviewComponent } from './review/review.component';
>>>>>>> 39dd6f7438e6ff20416c2fbfd7924c3fca1dea08
const routes: Routes = [
  {
    path: 'signin',
    component: SignupComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projectupload',
    component: ProjectUploadComponent
  },
  {
    path: 'resumeupload',
    component: ResumeUploadComponent
  },
  {
    path: 'reviews',
    component: ReviewComponent
  },
  {
    path: 'resumeform',
    component: ResumeformComponent
  },
  {
    path: 'profilesite',
    component: ProfilesiteComponent
  },
  {
    path: 'forum',
    component: ForumComponent

  },
  {
    path: 'pdfview',
    component: PrevpdfComponent

  }, {
    path: 'projectsurvey',
    component: ProjectsurveyComponent

  },{
    path:'analyse',
    component: AnalyseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
