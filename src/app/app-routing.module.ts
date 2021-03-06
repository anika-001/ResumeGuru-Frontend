import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { ForumComponent } from './forum/forum.component';
import { PrevpdfComponent } from './prevpdf/prevpdf.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ProjectUploadComponent } from './project-upload/project-upload.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { ReviewComponent } from './review/review.component';
import { ReviewProjectComponent } from './review-project/review-project.component';
import { ReviewResumeComponent } from './review-resume/review-resume.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
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

  }, 
  {
    path:'analyse',
    component: AnalyseComponent
  },{
    path:'resumereview',
    component: ReviewResumeComponent
  },
  {
    path:'projectreview',
    component: ReviewProjectComponent
  },{
    path:'project',
    component: ProjectComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
