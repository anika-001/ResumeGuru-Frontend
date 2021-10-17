import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-project-upload',
  templateUrl: './project-upload.component.html',
  styleUrls: ['./project-upload.component.scss']
})
export class ProjectUploadComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private db: AngularFirestore, private as: AuthService) {}

  user: any;

  projectUploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    githubLink: new FormControl(''),
    projectLink: new FormControl(''),
    surveyLink: new FormControl(''),
    description: new FormControl('', [Validators.required])
  });
  
  ngOnInit(): void {
    this.as.getUserState().subscribe(user => {
      if(user == null) {this.router.navigate(['/signin'])}
      else{
        this.user = user;
        this.as.getprofile(user.uid).subscribe((res:any) => {
          this.user["name"] = res.payload.data().name;
        })
        
      }
    })
    
  }

  save() {
    let puf = this.projectUploadForm.value;
    puf["uid"] = this.user.uid;
    this.projectUploadForm.get("name").setValue("");
    this.projectUploadForm.get("githubLink").setValue("");
    this.projectUploadForm.get("projectLink").setValue("");
    this.projectUploadForm.get("surveyLink").setValue("");
    this.projectUploadForm.get("description").setValue("");
    this.db.collection("Projects").add(puf).then(res => {console.log("Success")}).catch(err => {console.log(err)});

    // console.log(this.resumeBuilderForm, this.resumeBuilderForm.controls.experienceBlocks.value[0].company);
    // console.log('Saved: ' + JSON.stringify(this.resumeBuilderForm.value));
    
    // this.router.navigate(['/profilesite'], { queryParams: { 
    //   fname: this.resumeBuilderForm.get('firstName').value,
    //   lname: this.resumeBuilderForm.get('lastName').value,
    //   email: this.resumeBuilderForm.get('email').value,
    //   phone: this.resumeBuilderForm.get('phone').value,
    //   title: this.resumeBuilderForm.controls.experienceBlocks.value[0].title,
    //   company: this.resumeBuilderForm.controls.experienceBlocks.value[0].company,
    //   location: this.resumeBuilderForm.controls.experienceBlocks.value[0].location,
    //   startDate: this.resumeBuilderForm.controls.experienceBlocks.value[0].startDate,
    //   endDate: this.resumeBuilderForm.controls.experienceBlocks.value[0].endDate,
    //   description: this.resumeBuilderForm.controls.experienceBlocks.value[0].description,
    //   skill1: this.resumeBuilderForm.get('skill1').value,
    //   skill2: this.resumeBuilderForm.get('skill2').value,
    //   skill3: this.resumeBuilderForm.get('skill3').value,
    //   skill4: this.resumeBuilderForm.get('skill4').value,
    // } })
  }

}
