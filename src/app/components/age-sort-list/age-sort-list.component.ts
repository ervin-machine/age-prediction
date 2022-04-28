import { Component, Input, OnInit } from '@angular/core';
import { Prediction } from 'src/app/interface/prediction';


@Component({
  selector: 'app-age-sort-list',
  templateUrl: './age-sort-list.component.html',
  styleUrls: ['./age-sort-list.component.css']
})
export class AgeSortListComponent implements OnInit {
  @Input() ageSort: Prediction[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
