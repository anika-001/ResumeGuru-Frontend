import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-project',
  templateUrl: './review-project.component.html',
  styleUrls: ['./review-project.component.scss']
})
export class ReviewProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id']
  }

}
