import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
  
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-prevpdf',
  templateUrl: './prevpdf.component.html',
  styleUrls: ['./prevpdf.component.scss']
})
export class PrevpdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'htmltopdf';
  
  @ViewChild('pdfTable') pdfTable: ElementRef;
  
  public downloadAsPDF() {
    const doc = new jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }

}
