import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent as pdfc} from 'ng2-pdf-viewer';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  @ViewChild(pdfc, {static: false})
  private pdfComponent: pdfc;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }

}
