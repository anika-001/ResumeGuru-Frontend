import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
