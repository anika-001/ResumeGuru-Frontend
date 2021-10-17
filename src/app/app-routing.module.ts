import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { ForumComponent } from './forum/forum.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PrevpdfComponent } from './prevpdf/prevpdf.component';
import { ProjectsurveyComponent } from './projectsurvey/projectsurvey.component';
const routes: Routes = [
  {
    path: 'signin',
    component: SignupComponent
  }, {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resumeform',
    component: ResumeformComponent
  }, {
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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
