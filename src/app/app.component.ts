import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mhacks';
  apiEndPoint = 'http://localhost:5000/pdf';

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new HttpHeaders();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
      this.httpClient.post(this.apiEndPoint, formData, {headers: headers})
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }
  }
}
