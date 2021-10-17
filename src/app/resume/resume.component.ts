import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer, private as: AuthService, private router: Router, private route: ActivatedRoute, private db: AngularFirestore) { }

  id: any;
  user: any;
  project: any;
  comments: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id']
    this.getproject();
    this.getcomments();
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

  getproject(){
    this.db.collection("Resumes").doc(this.id).snapshotChanges().subscribe(res => {
      this.project = res;
    })
  }

  getcomments(){
    this.db.collection("Resumes").doc(this.id).collection("Comments").snapshotChanges().subscribe(res => {
      this.comments = res;
    })
  }
}
