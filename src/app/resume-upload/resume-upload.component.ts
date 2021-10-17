import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss']
})
export class ResumeUploadComponent implements OnInit {

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
  }

}
