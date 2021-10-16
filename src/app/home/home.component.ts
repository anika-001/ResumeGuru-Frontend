import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent: PdfViewerComponent;

  constructor(private httpClient: HttpClient) { }

  tands = [0, 1, 2, 3, 4]

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
