import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {


  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent: PdfViewerComponent;

  url: any = '';

  constructor(private httpClient: HttpClient, public sanitizer: DomSanitizer) { }

  tands = [0, 1, 2, 3, 4]
  name = ['Eesha Ann', 'miesha Connon', 'Jay Victor', 'Kat Dez', 'Aubery Cez']
  countr = [10, 41, 22, 31, 44]
  ngOnInit(): void {
  }

  jobdescform = new FormGroup({
    jobdesc: new FormControl('', [Validators.required]),
  })

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.url = reader.result; 
    }
      // let headers = new HttpHeaders();
      // headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
    //   this.httpClient.post(this.apiEndPoint, formData, {headers: headers})
    //     .subscribe(
    //       data => console.log('success'),
    //       error => console.log(error)
    //     )
    }
  }

  test(){
    this.httpClient.post<any>('http://localhost:5000/test', {"num1": 4, "num2": 3}).subscribe(
      (res)=>{
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }

}
