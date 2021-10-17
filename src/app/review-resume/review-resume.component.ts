import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-review-resume',
  templateUrl: './review-resume.component.html',
  styleUrls: ['./review-resume.component.scss']
})
export class ReviewResumeComponent implements OnInit {

  id: any;
  project: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id']
    this.getproject();
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

 

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private db: AngularFirestore, private as: AuthService) {}

  user: any;

  getproject(){
    this.db.collection("Resumes").doc(this.id).snapshotChanges().subscribe(res => {
      this.project = res;
    })
  }

  projectUploadForm = new FormGroup({
    comments: new FormControl('', [Validators.required]),
    // githubLink: new FormControl(''),
    // projectLink: new FormControl(''),
    // surveyLink: new FormControl(''),
    // description: new FormControl('', [Validators.required])
  });


  save() {
    let puf = this.projectUploadForm.value;
    puf["uid"] = this.user.uid;
    this.db.collection("Projects").doc(this.id).collection("Comments").add(puf).then(res => {console.log("Success")}).catch(err => {console.log(err)});
  }

}
