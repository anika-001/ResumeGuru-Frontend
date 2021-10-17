import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DomSanitizer } from '@angular/platform-browser';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {


  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent: PdfViewerComponent;

  click: boolean = false;
  url: any = '';
doughnut:ChartType='doughnut';
  constructor(private httpClient: HttpClient, public sanitizer: DomSanitizer) { }
  activity = {
    Label: ['Secured', 'Developed', 'Designed', 'Lead', 'implemented'],
    Data: [1, 4, 2, 2, 4],
    Type:this.doughnut
  };

  expenses = {
    Label: ['C++', 'Python', 'Docker', 'DSA', 'Tableau'],
    Data: [90, 50, 60, 100, 90],
    Type:this.doughnut
  };
  tands = [0, 1, 2, 3, 4]
  jobs=['Software Development Engineer','Research Intern','Teacher Assistant','Devops engineer','Cloud Solution Architect']
  name = ['Correctness', 'clarity', 'Engagement', 'delivery']
  countr = ['7 alerts', 'very clear', 'very engaging', 'slightly off']
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
    this.click = true;
    // this.httpClient.post<any>('http://localhost:5000/test', {"num1": 4, "num2": 3}).subscribe(
    //   (res)=>{
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )
  }

  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }

}
