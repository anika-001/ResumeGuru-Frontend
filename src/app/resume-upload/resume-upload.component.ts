import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss']
})
export class ResumeUploadComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private db: AngularFirestore, private as: AuthService, private storage: AngularFireStorage) {}

  user: any;
  pdfupload: any;
  resumeUploadForm = new FormGroup({
    domain: new FormControl('', [Validators.required]),
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

  uploadresume(eventtarget: any) {
    let files: FileList = eventtarget.files;
    this.pdfupload = files.item(0);
  }

  save() {
    const path = `${this.user.uid}/resume/${this.pdfupload.name}`;
    const ref = this.storage.ref(path);
    this.storage.upload(path, this.pdfupload).then(
      ress => {
        ref.getDownloadURL().subscribe(res => {
          console.log(res);
          let data = this.resumeUploadForm.value;
          data["uid"] = this.user.uid;
          data["link"] = res;
          this.db.collection("Resumes").add(data).then(e => {
            console.log(e)
          }).
            catch(e => { console.log(e) });
        })

      });
  }

}
