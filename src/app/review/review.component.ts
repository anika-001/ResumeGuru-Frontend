import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  payload = []
  user: any;
  projects: boolean = true;

  constructor(private httpClient: HttpClient, private db: AngularFirestore, private router: Router, private as: AuthService) {
   }

  ngOnInit(): void {
    this.as.getUserState().subscribe(user => {
      if(user == null) {this.router.navigate(['/signin'])}
      else{
        this.user = user;
        this.getprojects();
      }
    })
  }

  getprojects(){
    this.projects = true;
    this.db.collection("Projects").snapshotChanges().subscribe(res => {
      console.log("Projects", this.payload)
      this.payload = []
      this.payload = res;
    })
  }

  getresumes(){
    this.projects = false;
    this.db.collection("Resumes").snapshotChanges().subscribe(res => {
      console.log("Resumes", this.payload)
      this.payload = []
      this.payload = res;
    })
  }
  getreview(id){

this.router.navigate(['/resumereview'], { queryParams: {id: id}});
  }
  getreview1(id){

    this.router.navigate(['/projectreview'], { queryParams: {id: id}});
      }
}
