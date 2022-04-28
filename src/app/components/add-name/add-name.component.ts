import { Component, OnInit } from '@angular/core';
import { PredictionService } from 'src/app/services/prediction.service';
import { Prediction } from 'src/app/interface/prediction';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})

export class AddNameComponent implements OnInit {
  name = ''
  names: string[] = []
  alphabeticalSortList: Prediction[] = []
  ageSortList: Prediction[] = []

  constructor(private PredictionS: PredictionService) { }

  ngOnInit(): void {
  }

  saveName() {
    let namesURL = ''
    this.names.push(this.name)

    this.names.forEach((el: any, index: any) => {
      namesURL += 'name[]=' + this.names[index] + '&'
    })

    this.PredictionS.getPredictions(namesURL).subscribe((data) => {
      this.alphabeticalSortList = this.alphabeticalSort([...data])
      this.ageSortList = this.ageSort([...data])
    })

    this.name = ''
  }

  alphabeticalSort(arr: any) {
    return arr.sort((a: any, b: any) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    })
  }

  ageSort(arr: any) {
    return arr.sort((a: any, b: any) => {
      return a.age - b.age
    })
  }

}
