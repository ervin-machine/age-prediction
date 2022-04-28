import { Component, Input, OnInit } from '@angular/core';
import { Prediction } from 'src/app/interface/prediction';

@Component({
  selector: 'app-alphabetical-sort-list',
  templateUrl: './alphabetical-sort-list.component.html',
  styleUrls: ['./alphabetical-sort-list.component.css']
})
export class AlphabeticalSortListComponent implements OnInit {
  @Input() alphabeticalSort: Prediction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
